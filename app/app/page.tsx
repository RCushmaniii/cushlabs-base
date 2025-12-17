import { createSupabaseServerClient } from '@/lib/supabase/server';

import { getLang, t } from '@/lib/i18n';

import { createNote, deleteNote } from './actions';

export default async function AppHomePage() {
  const lang = getLang();
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  const serverTime = new Date().toISOString();

  let role: string | null = null;
  if (user) {
    try {
      const { data: profile } = await supabase.from('profiles').select('role').eq('id', user.id).maybeSingle();
      role = profile?.role ?? null;
    } catch {
      role = null;
    }
  }

  const { data: notes } = user
    ? await supabase
        .from('notes')
        .select('id, content, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
    : { data: [] as Array<{ id: string; content: string; created_at: string }> };

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">{t(lang, 'dashboardTitle')}</h1>
        <p className="text-sm text-neutral-700">{t(lang, 'dashboardSubtitle')}</p>
      </header>

      <div className="rounded border border-neutral-200 bg-white p-4">
        <h2 className="text-sm font-semibold">{t(lang, 'demoStepsTitle')}</h2>
        <p className="mt-2 text-sm text-neutral-700">{t(lang, 'demoStepsIntro')}</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
          <li>{t(lang, 'demoStep1')}</li>
          <li>{t(lang, 'demoStep2')}</li>
          <li>{t(lang, 'demoStep3')}</li>
          <li>{t(lang, 'demoStep4')}</li>
        </ol>
      </div>

      <div className="rounded border border-neutral-200 p-4">
        <h2 className="text-sm font-semibold">{t(lang, 'sessionProofTitle')}</h2>
        <dl className="mt-3 grid gap-2 text-sm">
          <div className="grid grid-cols-[140px_1fr] gap-3">
            <dt className="text-neutral-600">{t(lang, 'signedIn')}</dt>
            <dd className="font-medium">{user ? t(lang, 'yes') : t(lang, 'no')}</dd>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-3">
            <dt className="text-neutral-600">{t(lang, 'email')}</dt>
            <dd className="font-medium">{user?.email ?? t(lang, 'unknown')}</dd>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-3">
            <dt className="text-neutral-600">{t(lang, 'userId')}</dt>
            <dd className="font-mono text-xs">{user?.id ?? t(lang, 'unknown')}</dd>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-3">
            <dt className="text-neutral-600">{t(lang, 'role')}</dt>
            <dd className="font-medium">{role ?? t(lang, 'unknown')}</dd>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-3">
            <dt className="text-neutral-600">{t(lang, 'serverTime')}</dt>
            <dd className="font-mono text-xs">{serverTime}</dd>
          </div>
        </dl>
      </div>

      <div className="rounded border border-neutral-200 p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-sm font-semibold">{t(lang, 'notesTitle')}</h2>
            <p className="text-xs text-neutral-600">{t(lang, 'notesSubtitle')}</p>
          </div>
        </div>

        <form action={createNote} className="mt-4 flex flex-col gap-2 sm:flex-row">
          <input
            name="content"
            placeholder={t(lang, 'notePlaceholder')}
            className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
            maxLength={500}
            required
          />
          <button
            type="submit"
            className="rounded bg-black px-4 py-2 text-sm font-medium text-white"
          >
            {t(lang, 'add')}
          </button>
        </form>

        <ul className="mt-4 space-y-2">
          {(notes ?? []).map((note) => (
            <li key={note.id} className="flex items-start justify-between gap-3 rounded border border-neutral-200 p-3">
              <div className="min-w-0">
                <p className="break-words text-sm">{note.content}</p>
                <p className="mt-1 font-mono text-[11px] text-neutral-500">{note.created_at}</p>
              </div>
              <form action={deleteNote} className="shrink-0">
                <input type="hidden" name="id" value={note.id} />
                <button type="submit" className="text-sm underline">
                  {t(lang, 'delete')}
                </button>
              </form>
            </li>
          ))}
          {(notes ?? []).length === 0 ? (
            <li className="rounded border border-dashed border-neutral-300 p-3 text-sm text-neutral-600">
              {t(lang, 'noNotes')}
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  );
}
