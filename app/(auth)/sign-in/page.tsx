import Link from 'next/link';

import { signInWithEmail } from './actions';

export default function SignInPage({
  searchParams
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const error = typeof searchParams.error === 'string' ? searchParams.error : undefined;
  const checkEmail = searchParams.check_email === '1';

  return (
    <main className="mx-auto max-w-md px-6 py-16">
      <h1 className="text-2xl font-semibold">Sign in / Iniciar sesión</h1>
      <p className="mt-2 text-sm text-neutral-700">
        Use email magic link authentication.
        <br />
        Usa autenticación por enlace mágico.
      </p>

      {checkEmail ? (
        <div className="mt-6 rounded border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Check your email for a sign-in link.
          <br />
          Revisa tu correo para el enlace de acceso.
        </div>
      ) : null}

      {error ? (
        <div className="mt-6 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          Something went wrong. Please try again.
          <br />
          Algo salió mal. Intenta de nuevo.
        </div>
      ) : null}

      <form action={signInWithEmail} className="mt-8 space-y-4">
        <label className="block text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
            placeholder="you@domain.com"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded bg-black px-4 py-2 text-sm font-medium text-white"
        >
          Send link / Enviar enlace
        </button>
      </form>

      <div className="mt-8">
        <Link href="/" className="text-sm underline">
          Back / Volver
        </Link>
      </div>
    </main>
  );
}
