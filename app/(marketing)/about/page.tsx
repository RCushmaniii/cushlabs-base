import { getLang, t } from '@/lib/i18n';

export default function AboutPage() {
  const lang = getLang();

  return (
    <main className="mx-auto max-w-3xl px-6 pb-8 pt-8 sm:pt-12">
      <h1 className="text-3xl font-semibold">{t(lang, 'aboutTitle')}</h1>
      <p className="mt-4 text-sm text-neutral-700">{t(lang, 'aboutSubtitle')}</p>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-sm font-semibold">{t(lang, 'aboutSection1Title')}</h2>
          <p className="mt-2 text-sm text-neutral-700">{t(lang, 'aboutSection1Body')}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">{t(lang, 'aboutSection2Title')}</h2>
          <p className="mt-2 text-sm text-neutral-700">{t(lang, 'aboutSection2Body')}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">{t(lang, 'aboutSection3Title')}</h2>
          <p className="mt-2 text-sm text-neutral-700">{t(lang, 'aboutSection3Body')}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">{t(lang, 'aboutSection4Title')}</h2>
          <p className="mt-2 text-sm text-neutral-700">{t(lang, 'aboutSection4Body')}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">{t(lang, 'aboutUnderHoodTitle')}</h2>
          <dl className="mt-3 grid gap-2 text-sm">
            <div className="grid grid-cols-[120px_1fr] gap-3">
              <dt className="text-neutral-600">{t(lang, 'aboutUnderHoodFrameworkLabel')}</dt>
              <dd className="text-neutral-900">{t(lang, 'aboutUnderHoodFrameworkValue')}</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-3">
              <dt className="text-neutral-600">{t(lang, 'aboutUnderHoodAuthLabel')}</dt>
              <dd className="text-neutral-900">{t(lang, 'aboutUnderHoodAuthValue')}</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-3">
              <dt className="text-neutral-600">{t(lang, 'aboutUnderHoodSecurityLabel')}</dt>
              <dd className="text-neutral-900">{t(lang, 'aboutUnderHoodSecurityValue')}</dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-3">
              <dt className="text-neutral-600">{t(lang, 'aboutUnderHoodI18nLabel')}</dt>
              <dd className="text-neutral-900">{t(lang, 'aboutUnderHoodI18nValue')}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="text-sm font-semibold">{t(lang, 'aboutBuilderTitle')}</h2>
          <p className="mt-2 text-sm text-neutral-700">{t(lang, 'aboutBuilderBody')}</p>
          <p className="mt-3 text-sm font-medium">{t(lang, 'aboutBuilderSignature')}</p>
        </div>
      </section>
    </main>
  );
}
