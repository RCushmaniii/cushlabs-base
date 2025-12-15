# CushLabs Base

Production-grade SaaS scaffold built with Next.js App Router, TypeScript, Tailwind, and Supabase.

This repo is designed to be cloned and reused for real MVPs, internal tools, and client projects where correctness, security, and clarity matter.

## What You Get (v1)

- Next.js App Router + TypeScript (strict)
- Supabase Auth (email magic link)
- Session refresh + protected routing via middleware
- Admin boundary (`/admin`) gated by `profiles.role`
- Supabase schema migration with RLS policies
- Minimal CI (typecheck, lint, build)

## Who This Is For

- Solo developers or small teams building real MVPs
- Freelancers / agencies who want a reliable starting point
- Engineers who care about auth, RLS, and production hygiene

## Quickstart

### 1) Install dependencies

```bash
npm install
```

### 2) Configure env

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3) Apply database migration + RLS

Migration:

- `supabase/migrations/20251214190000_init.sql`

Apply via:

- Supabase Dashboard SQL editor, or
- Supabase CLI (recommended)

### 4) Run the app

```bash
npm run dev
```

Routes:

- `/` marketing home
- `/sign-in` sign-in
- `/app` protected app area
- `/admin` admin-only area

## Documentation & Decisions

All architectural intent, scope boundaries, and platform decisions live in `/docs`.

Start here:

- `docs/PROJECT_BRIEF.md`
- `docs/SCOPE_BOUNDARIES.md`
- `docs/ARCHITECTURE_INTENT.md`

## License

See `LICENSE`.
