import Link from 'next/link';

import type { Lang } from '@/lib/i18n-shared';
import { t } from '@/lib/i18n-shared';

export function PublicFooter({ lang }: { lang: Lang }) {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-[#ff6a3d]" aria-hidden="true" />
            CushLabs.ai
          </div>
          <p className="mt-3 text-sm text-neutral-700">{t(lang, 'footerTagline')}</p>
          <p className="mt-6 text-xs text-neutral-500">{t(lang, 'copyright')}</p>
        </div>

        <div className="text-sm">
          <div className="font-semibold">{t(lang, 'docs')}</div>
          <div className="mt-3 space-y-2">
            <Link href="/about" className="block text-neutral-700 hover:text-neutral-900">
              {t(lang, 'about')}
            </Link>
            <a
              href="https://github.com/RCushmaniii/nextjs-supabase-auth-starter"
              target="_blank"
              rel="noreferrer"
              className="block text-neutral-700 hover:text-neutral-900"
            >
              {t(lang, 'github')}
            </a>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-semibold">{t(lang, 'product')}</div>
          <div className="mt-3 space-y-2">
            <Link href="/" className="block text-neutral-700 hover:text-neutral-900">
              {t(lang, 'home')}
            </Link>
            <Link href="/sign-in" className="block text-neutral-700 hover:text-neutral-900">
              {t(lang, 'signIn')}
            </Link>
            <Link href="/app" className="block text-neutral-700 hover:text-neutral-900">
              {t(lang, 'app')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
