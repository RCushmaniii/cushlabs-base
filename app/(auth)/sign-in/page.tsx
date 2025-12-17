import Link from "next/link";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getLang, t } from "@/lib/i18n";

import { signInWithEmail } from "./actions";

export default function SignInPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const lang = getLang();
  const error =
    typeof searchParams.error === "string" ? searchParams.error : undefined;
  const checkEmail = searchParams.check_email === "1";

  const errorMessage =
    error === "invalid_email"
      ? t(lang, "invalidEmail")
      : error
        ? t(lang, "authFailed")
        : null;

  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6 py-16">
      <div className="w-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">{t(lang, 'signInTitle')}</h1>
            <p className="mt-2 text-sm text-neutral-700">{t(lang, 'signInIntro')}</p>
            <p className="mt-2 text-xs text-neutral-600">{t(lang, 'signInNote')}</p>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher lang={lang} nextPath="/sign-in" />
            <Link href="/" className="text-sm text-neutral-700 underline">
              {t(lang, 'home')}
            </Link>
          </div>
        </div>

        {checkEmail ? (
          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            {t(lang, 'checkEmailTitle')}
            <div className="mt-2 text-emerald-900/80">
              {t(lang, 'checkEmailTip')}
            </div>
          </div>
        ) : null}

        {errorMessage ? (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            {errorMessage}
          </div>
        ) : null}

        <form action={signInWithEmail} className="mt-8 space-y-4">
          <label className="block text-sm font-medium">
            {t(lang, 'email')}
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
            {t(lang, 'sendLink')}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <Link href="/" className="text-sm text-neutral-700 underline">
            {t(lang, 'back')}
          </Link>
          <Link href="/app" className="text-sm text-neutral-700 underline">
            {t(lang, 'app')}
          </Link>
        </div>
      </div>
    </main>
  );
}
