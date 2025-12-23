import { getLang, t } from '@/lib/i18n';

export default function WhyUseMagicLinksPage() {
  const lang = getLang();

  return (
    <main className="mx-auto max-w-2xl px-6 pb-8 pt-8 sm:pt-12">
      <h1 className="mt-6 text-3xl font-semibold">{t(lang, 'whyTitle')}</h1>
      <p className="mt-4 text-sm text-neutral-700">{t(lang, 'whySubtitle')}</p>

      <section className="mt-10 space-y-10">
        <div className="space-y-4">
          <p className="text-sm text-neutral-700">{t(lang, 'whyIntro')}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900">{t(lang, 'whyUsefulTitle')}</h2>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyUseful1Label')}</span>{' '}
              {t(lang, 'whyUseful1Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyUseful2Label')}</span>{' '}
              {t(lang, 'whyUseful2Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyUseful3Label')}</span>{' '}
              {t(lang, 'whyUseful3Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyUseful4Label')}</span>{' '}
              {t(lang, 'whyUseful4Text')}
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900">{t(lang, 'whyBehaviorsTitle')}</h2>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyBehavior1Label')}</span>{' '}
              {t(lang, 'whyBehavior1Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyBehavior2Label')}</span>{' '}
              {t(lang, 'whyBehavior2Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyBehavior3Label')}</span>{' '}
              {t(lang, 'whyBehavior3Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyBehavior4Label')}</span>{' '}
              {t(lang, 'whyBehavior4Text')}
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900">{t(lang, 'whyUseCasesTitle')}</h2>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyUseCase1Label')}</span>{' '}
              {t(lang, 'whyUseCase1Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyUseCase2Label')}</span>{' '}
              {t(lang, 'whyUseCase2Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyUseCase3Label')}</span>{' '}
              {t(lang, 'whyUseCase3Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyUseCase4Label')}</span>{' '}
              {t(lang, 'whyUseCase4Text')}
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900">{t(lang, 'whyConsiderationsTitle')}</h2>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyConsideration1Label')}</span>{' '}
              {t(lang, 'whyConsideration1Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyConsideration2Label')}</span>{' '}
              {t(lang, 'whyConsideration2Text')}
            </li>
            <li>
              <span className="font-medium text-neutral-900">{t(lang, 'whyConsideration3Label')}</span>{' '}
              {t(lang, 'whyConsideration3Text')}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
