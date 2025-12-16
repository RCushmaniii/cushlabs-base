'use server';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import { getEnv } from '@/lib/env';
import { createSupabaseServerClient } from '@/lib/supabase/server';

const schema = z.object({
  email: z.string().email()
});

export async function signInWithEmail(formData: FormData) {
  const email = formData.get('email');
  const parsed = schema.safeParse({ email });

  if (!parsed.success) {
    redirect('/sign-in?error=invalid_email');
  }

  const env = getEnv();
  const origin = headers().get('origin') ?? env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
  const supabase = createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithOtp({
    email: parsed.data.email,
    options: {
      emailRedirectTo: `${origin}/auth/callback`
    }
  });

  if (error) {
    redirect('/sign-in?error=auth_failed');
  }

  redirect('/sign-in?check_email=1');
}
