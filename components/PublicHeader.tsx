'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import type { Lang } from '@/lib/i18n-shared';
import { t } from '@/lib/i18n-shared';

export function PublicHeader({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const nextPath = pathname || '/';

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="h-2 w-2 rounded-full bg-[#ff6a3d]" aria-hidden="true" />
          CushLabs.ai
        </Link>

        <nav className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-neutral-700 hover:text-neutral-900">
              {t(lang, 'home')}
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-neutral-900">
              {t(lang, 'about')}
            </Link>
            <Link href="/app" className="text-neutral-700 hover:text-neutral-900">
              {t(lang, 'app')}
            </Link>
            <a
              href="https://github.com/RCushmaniii/nextjs-supabase-auth-starter"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-700 hover:text-neutral-900"
            >
              {t(lang, 'github')}
            </a>
          </div>

          <LanguageSwitcher lang={lang} nextPath={nextPath} />
        </nav>
      </div>
    </header>
  );
}
