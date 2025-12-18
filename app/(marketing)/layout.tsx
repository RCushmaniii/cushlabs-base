import type { ReactNode } from 'react';

import { PublicFooter } from '@/components/PublicFooter';
import { PublicHeader } from '@/components/PublicHeader';
import { getLang } from '@/lib/i18n';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  const lang = getLang();

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader lang={lang} />
      <div className="flex-1">{children}</div>
      <PublicFooter lang={lang} />
    </div>
  );
}
