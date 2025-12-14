import { redirect } from 'next/navigation';

import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function requireAdmin() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  let role: string | null = null;
  try {
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle();
    role = profile?.role ?? null;
  } catch {
    role = null;
  }

  if (role !== 'admin') {
    redirect('/app');
  }

  return user;
}
