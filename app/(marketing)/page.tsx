import Link from 'next/link';
import { getLang, t } from '@/lib/i18n';

export default function MarketingHomePage() {
  const lang = getLang();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mt-6 text-3xl font-semibold">{t(lang, 'siteTitle')}</h1>
      <p className="mt-4 text-sm text-neutral-700">{t(lang, 'siteTagline')}</p>

      <div className="mt-10 flex gap-3">
        <Link
          href="/sign-in"
          className="rounded bg-black px-4 py-2 text-sm font-medium text-white"
        >
          {t(lang, 'signIn')}
        </Link>
        <Link
          href="/app"
          className="rounded border border-neutral-300 px-4 py-2 text-sm font-medium"
        >
          {t(lang, 'app')}
        </Link>
      </div>
    </main>
  );
}
