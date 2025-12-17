import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  const url = new URL(request.url);
  const langParam = url.searchParams.get('lang');
  const nextParam = url.searchParams.get('next') ?? '/';

  const lang = langParam === 'es' ? 'es' : 'en';
  const nextPath = nextParam.startsWith('/') ? nextParam : '/';

  const response = NextResponse.redirect(new URL(nextPath, url.origin));
  response.cookies.set('lang', lang, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365
  });

  return response;
}
