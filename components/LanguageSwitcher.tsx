import Link from 'next/link';

import type { Lang } from '@/lib/i18n';

export function LanguageSwitcher({ lang, nextPath }: { lang: Lang; nextPath: string }) {
  const enClass = lang === 'en' ? 'font-semibold underline' : 'underline text-neutral-600';
  const esClass = lang === 'es' ? 'font-semibold underline' : 'underline text-neutral-600';

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link href={`/lang?lang=en&next=${encodeURIComponent(nextPath)}`} className={enClass}>
        EN
      </Link>
      <span className="text-neutral-400">|</span>
      <Link href={`/lang?lang=es&next=${encodeURIComponent(nextPath)}`} className={esClass}>
        ES
      </Link>
    </div>
  );
}
