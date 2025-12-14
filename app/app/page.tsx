import { createSupabaseServerClient } from '@/lib/supabase/server';

export default async function AppHomePage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-sm text-neutral-700">
        Signed in as: <span className="font-medium">{user?.email ?? 'unknown'}</span>
      </p>
    </section>
  );
}
