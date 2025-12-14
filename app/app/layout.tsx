import Link from 'next/link';
import type { ReactNode } from 'react';

import { requireUser } from '@/lib/auth/require-user';

export default async function AppLayout({ children }: { children: ReactNode }) {
  await requireUser();

  return (
    <div className="min-h-screen">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/app" className="text-sm font-semibold">
            App
          </Link>

          <form action="/auth/sign-out" method="post">
            <button type="submit" className="text-sm underline">
              Sign out / Cerrar sesión
            </button>
          </form>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>
    </div>
  );
}
