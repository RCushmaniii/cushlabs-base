import Link from 'next/link';

export default function MarketingHomePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-semibold">CushLabs Base</h1>
      <p className="mt-4 text-sm text-neutral-700">
        Production-grade SaaS base scaffold built with Next.js App Router + Supabase.
      </p>

      <div className="mt-10 flex gap-3">
        <Link
          href="/sign-in"
          className="rounded bg-black px-4 py-2 text-sm font-medium text-white"
        >
          Sign in / Iniciar sesión
        </Link>
        <Link
          href="/app"
          className="rounded border border-neutral-300 px-4 py-2 text-sm font-medium"
        >
          App
        </Link>
      </div>
    </main>
  );
}
