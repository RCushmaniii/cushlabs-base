import Link from 'next/link';
import type { ReactNode } from 'react';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { requireUser } from '@/lib/auth/require-user';
import { getLang, t } from '@/lib/i18n';

export const dynamic = 'force-dynamic';

export default async function AppLayout({ children }: { children: ReactNode }) {
  await requireUser();

  const lang = getLang();

  return (
    <div className="min-h-screen">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/app" className="text-sm font-semibold">
            {t(lang, 'app')}
          </Link>

          <div className="flex items-center gap-4">
            <LanguageSwitcher lang={lang} nextPath="/app" />
            <form action="/auth/sign-out" method="post">
              <button type="submit" className="text-sm underline">
                {t(lang, 'signOut')}
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>
    </div>
  );
}
