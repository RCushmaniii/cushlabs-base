import type { ReactNode } from 'react';

import { PublicFooter } from '@/components/PublicFooter';
import { PublicHeader } from '@/components/PublicHeader';
import { getLang } from '@/lib/i18n';

export default function AuthLayout({ children }: { children: ReactNode }) {
  const lang = getLang();

  return (
    <div className="min-h-screen">
      <PublicHeader lang={lang} />
      {children}
      <PublicFooter lang={lang} />
    </div>
  );
}
