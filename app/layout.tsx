import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import { getLang } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Next.js Supabase Auth Starter",
  description:
    "Minimal Next.js + Supabase Auth + RLS starter with SSR session refresh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const lang = getLang();

  return (
    <html lang={lang}>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
