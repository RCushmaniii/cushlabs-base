import { cookies, headers } from 'next/headers';

import type { Lang } from '@/lib/i18n-shared';

function detectBrowserLanguage(): Lang {
  try {
    const headersList = headers();
    const acceptLanguage = headersList.get('accept-language');
    
    if (!acceptLanguage) {
      return 'en';
    }

    const languages = acceptLanguage
      .split(',')
      .map((lang) => {
        const [code, qValue] = lang.trim().split(';q=');
        return {
          code: code.toLowerCase(),
          quality: qValue ? parseFloat(qValue) : 1.0
        };
      })
      .sort((a, b) => b.quality - a.quality);

    for (const { code } of languages) {
      if (code.startsWith('es')) {
        return 'es';
      }
    }

    return 'en';
  } catch {
    return 'en';
  }
}

export function getLang(): Lang {
  const cookieValue = cookies().get('lang')?.value;
  
  if (cookieValue === 'es' || cookieValue === 'en') {
    return cookieValue;
  }

  return detectBrowserLanguage();
}

export { t } from '@/lib/i18n-shared';
export type { I18nKey, Lang } from '@/lib/i18n-shared';
