import { getLang, t } from '@/lib/i18n';

export default function AdminHomePage() {
  const lang = getLang();

  return (
    <main className="mx-auto max-w-4xl px-6 pb-8 pt-8 sm:pt-12">
      <h1 className="text-2xl font-semibold">{t(lang, 'adminTitle')}</h1>
      <p className="mt-2 text-sm text-neutral-700">{t(lang, 'adminSubtitle')}</p>
    </main>
  );
}
