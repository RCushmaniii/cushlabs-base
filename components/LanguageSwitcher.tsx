import type { Lang } from '@/lib/i18n';

export function LanguageSwitcher({ lang, nextPath }: { lang: Lang; nextPath: string }) {
  const enClass = lang === 'en' ? 'font-semibold underline' : 'underline text-neutral-600';
  const esClass = lang === 'es' ? 'font-semibold underline' : 'underline text-neutral-600';

  const enHref = `/lang?lang=en&next=${encodeURIComponent(nextPath)}`;
  const esHref = `/lang?lang=es&next=${encodeURIComponent(nextPath)}`;

  return (
    <div className="flex items-center gap-2 text-sm">
      <a href={enHref} className={enClass}>
        EN
      </a>
      <span className="text-neutral-400">|</span>
      <a href={esHref} className={esClass}>
        ES
      </a>
    </div>
  );
}
