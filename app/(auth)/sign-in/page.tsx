import Link from "next/link";

import { signInWithEmail } from "./actions";

export default function SignInPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const error =
    typeof searchParams.error === "string" ? searchParams.error : undefined;
  const checkEmail = searchParams.check_email === "1";

  const errorMessage =
    error === "invalid_email"
      ? {
          en: "Please enter a valid email address.",
          es: "Por favor ingresa un correo válido.",
        }
      : error
      ? {
          en: "Unable to send sign-in link. Please try again.",
          es: "No se pudo enviar el enlace. Intenta de nuevo.",
        }
      : null;

  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6 py-16">
      <div className="w-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Sign in / Iniciar sesión</h1>
            <p className="mt-2 text-sm text-neutral-700">
              We’ll email you a magic link to sign in.
              <br />
              Te enviaremos un enlace mágico para iniciar sesión.
            </p>
          </div>

          <Link href="/" className="text-sm text-neutral-700 underline">
            Home / Inicio
          </Link>
        </div>

        {checkEmail ? (
          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            Check your email for a sign-in link.
            <br />
            Revisa tu correo para el enlace de acceso.
            <div className="mt-2 text-emerald-900/80">
              Open the link on the same device/browser if possible.
              <br />
              Abre el enlace en el mismo dispositivo/navegador si es posible.
            </div>
          </div>
        ) : null}

        {errorMessage ? (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            {errorMessage.en}
            <br />
            {errorMessage.es}
          </div>
        ) : null}

        <form action={signInWithEmail} className="mt-8 space-y-4">
          <label className="block text-sm font-medium">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-neutral-900"
              placeholder="you@domain.com"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Send link / Enviar enlace
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <Link href="/" className="text-sm text-neutral-700 underline">
            Back / Volver
          </Link>
          <Link href="/app" className="text-sm text-neutral-700 underline">
            App
          </Link>
        </div>
      </div>
    </main>
  );
}
