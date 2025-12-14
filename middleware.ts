import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { updateSession } from '@/lib/supabase/middleware';

const PROTECTED_PREFIXES = ['/app', '/admin'];

export async function middleware(request: NextRequest) {
  const { response, user, role } = await updateSession(request);

  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  const isAdminPath = pathname.startsWith('/admin');

  if (isProtected && !user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/sign-in';
    redirectUrl.searchParams.set('redirectedFrom', pathname);

    const redirectResponse = NextResponse.redirect(redirectUrl);
    for (const cookie of response.cookies.getAll()) {
      redirectResponse.cookies.set(cookie);
    }

    return redirectResponse;
  }

  if (isAdminPath && user && role !== 'admin') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/app';

    const redirectResponse = NextResponse.redirect(redirectUrl);
    for (const cookie of response.cookies.getAll()) {
      redirectResponse.cookies.set(cookie);
    }

    return redirectResponse;
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};
