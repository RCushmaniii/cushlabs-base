'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import type { Lang } from '@/lib/i18n-shared';
import { t } from '@/lib/i18n-shared';

export function PublicHeader({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const nextPath = pathname || '/';
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="h-2 w-2 rounded-full bg-[#ff6a3d]" aria-hidden="true" />
          CushLabs.ai
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          <div className="flex items-center gap-4 text-sm">
            <Link href="/why-use-magic-links" className="text-neutral-700 hover:text-neutral-900">
              {t(lang, 'why')}
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

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-neutral-200 px-2.5 py-2 text-neutral-700 hover:bg-neutral-50 sm:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="public-mobile-menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        className={
          mobileOpen
            ? 'fixed inset-0 z-50 bg-black/30 sm:hidden'
            : 'pointer-events-none fixed inset-0 z-50 bg-black/0 opacity-0 sm:hidden'
        }
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      />

      <div
        id="public-mobile-menu"
        className={
          mobileOpen
            ? 'fixed inset-y-0 right-0 z-50 w-[85vw] max-w-xs translate-x-0 border-l border-neutral-200 bg-white shadow-xl transition-transform sm:hidden'
            : 'fixed inset-y-0 right-0 z-50 w-[85vw] max-w-xs translate-x-full border-l border-neutral-200 bg-white shadow-xl transition-transform sm:hidden'
        }
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-[#ff6a3d]" aria-hidden="true" />
            CushLabs.ai
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 px-2.5 py-2 text-neutral-700 hover:bg-neutral-50"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-6 px-6 py-6">
          <div className="space-y-3 text-sm">
            <Link href="/why-use-magic-links" className="block text-neutral-800" onClick={() => setMobileOpen(false)}>
              {t(lang, 'why')}
            </Link>
            <Link href="/about" className="block text-neutral-800" onClick={() => setMobileOpen(false)}>
              {t(lang, 'about')}
            </Link>
            <Link href="/app" className="block text-neutral-800" onClick={() => setMobileOpen(false)}>
              {t(lang, 'app')}
            </Link>
            <a
              href="https://github.com/RCushmaniii/nextjs-supabase-auth-starter"
              target="_blank"
              rel="noreferrer"
              className="block text-neutral-800"
              onClick={() => setMobileOpen(false)}
            >
              {t(lang, 'github')}
            </a>
          </div>

          <div className="border-t border-neutral-200 pt-4">
            <LanguageSwitcher lang={lang} nextPath={nextPath} />
          </div>
        </div>
      </div>
    </header>
  );
}
