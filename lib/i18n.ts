import { cookies } from 'next/headers';

import type { Lang } from '@/lib/i18n-shared';

export function getLang(): Lang {
  const value = cookies().get('lang')?.value;
  return value === 'es' ? 'es' : 'en';
}

export { t } from '@/lib/i18n-shared';
export type { I18nKey, Lang } from '@/lib/i18n-shared';
