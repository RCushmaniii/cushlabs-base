import { createServerClient } from '@supabase/ssr';
import type { CookieOptions } from '@supabase/ssr';
import type { User } from '@supabase/supabase-js';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { env } from '@/lib/env';

type AppRole = 'user' | 'admin';

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers
    }
  });

  const supabase = createServerClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        request.cookies.set({ name, value, ...options });
        response = NextResponse.next({
          request: {
            headers: request.headers
          }
        });
        response.cookies.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        request.cookies.set({ name, value: '', ...options });
        response = NextResponse.next({
          request: {
            headers: request.headers
          }
        });
        response.cookies.set({ name, value: '', ...options, maxAge: 0 });
      }
    }
  });

  const { data: { user } } = await supabase.auth.getUser();

  let role: AppRole | null = null;
  if (user) {
    try {
      const { data } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle();
      role = (data?.role ?? null) as AppRole | null;
    } catch {
      role = null;
    }
  }

  return { response, user: user as User | null, role };
}
