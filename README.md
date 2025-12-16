# Next.js Supabase Auth Starter

Minimal Next.js App Router starter focused on **Supabase Auth**, **SSR session refresh**, and an **RLS-first database posture**.

## Features

- Next.js 14 App Router + TypeScript (strict)
- Supabase Auth (email magic link)
- SSR-friendly session refresh in `middleware.ts` via `@supabase/ssr`
- Protected routes example (`/app`)
- Optional admin boundary example (`/admin`) gated by `profiles.role`
- Migration included (profiles table + role enum + trigger + RLS policies)
- Environment variable validation (Zod)
- Minimal CI: `typecheck`, `lint`, `build`

## What This Repo Is / Is Not

This repo IS:

- A minimal, production-minded auth + RLS starter
- A good base to clone for MVPs where you want real auth and real DB security

This repo IS NOT:

- A shadcn/ui starter or design system template
- A full SaaS product (billing, teams, subscriptions, multi-tenant RBAC)
- A UI kit / component library
- A CMS/blog starter
- A general-purpose Next.js boilerplate

## BYO Supabase (How Templates Work)

This is a template repo.

- You bring your own Supabase project (hosted or local).
- This repo provides the schema + RLS via SQL migrations.

Without a Supabase project + env vars, the public landing page will render, but auth and protected routes will not be functional.

## Quickstart

### 1) Install dependencies

```bash
npm install
```

### 2) Configure env

Copy `.env.example` to `.env.local` and fill in values:

PowerShell:

```powershell
Copy-Item .env.example .env.local
```

macOS/Linux:

```bash
cp .env.example .env.local
```

Required:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (legacy `anon` key or new `sb_publishable_...` key)

Optional:

- `NEXT_PUBLIC_APP_URL` (useful as a fallback for auth redirect URL; set it to `http://localhost:3000` in dev)

### 3) Apply the database migration (RLS included)

Run:

- `supabase/migrations/20251214190000_init.sql`
- `supabase/migrations/20251216010600_notes.sql`

Apply it via:

- Supabase Dashboard SQL editor, or
- Supabase CLI migrations

What it does:

- Creates `public.app_role` enum (`user`, `admin`)
- Creates `public.profiles` (1:1 with `auth.users`)
- Enables RLS on `public.profiles`
- Adds policies for users to read/update their own profile (admins can read/update all)
- Adds a trigger to create `profiles` rows on new user signup
- Creates `public.notes` (demo table)
- Enables strict per-user RLS policies on `public.notes` (RLS proof playground)

Promote a user to admin (in SQL editor):

```sql
update public.profiles
set role = 'admin'
where id = '<user-uuid>';
```

### 4) Run the app

```bash
npm run dev
```

## Live Demo Deployment (Optional)

If you want a public demo that supports real sign-in, you need a hosted Supabase project + a hosted Next.js deployment.

1. Create a Supabase project.
2. Apply both migrations in the Supabase SQL editor.
3. Configure Supabase Auth redirect URLs:
   - `http://localhost:3000/auth/callback`
   - `https://YOUR_DEPLOY_DOMAIN/auth/callback`
4. Deploy to Vercel and set env vars:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_APP_URL=https://YOUR_DEPLOY_DOMAIN`

To make an admin user for the demo:

```sql
update public.profiles
set role = 'admin'
where id = '<user-uuid>';
```

## Routes

- `/` public landing page
- `/sign-in` sign-in (email magic link)
- `/app` protected route (auth required)
- `/admin` admin-only route (requires `profiles.role = 'admin'`)

## Security Notes (Read This)

- **RLS is enabled** on `public.profiles` by default.
- **Do not disable RLS** to “make things work”. Fix policies instead.
- This starter does not require a service role key.
  - If you add one later, **never expose it to the browser**.

## Project Structure

```text
.
├─ app/
│  ├─ (marketing)/page.tsx
│  ├─ (auth)/sign-in/
│  ├─ (auth)/auth/callback/
│  ├─ (auth)/auth/sign-out/
│  ├─ app/ (protected)
│  └─ admin/ (admin-only)
├─ lib/
│  ├─ env.ts
│  ├─ auth/
│  └─ supabase/
├─ supabase/
│  ├─ migrations/
│  └─ config.toml
├─ middleware.ts
└─ .github/workflows/ci.yml
```

## Scripts

- `npm run dev`
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `npm run start`

## License

See `LICENSE`.
