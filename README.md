# CushLabs Base

Production-grade SaaS scaffold built with Next.js App Router, TypeScript, Tailwind, and Supabase.

This repo is designed to be reused across client MVPs, internal experiments, and future SaaS products.

## What you get (v1)

- Next.js App Router + TypeScript (strict)
- Supabase Auth (email magic link)
- Session refresh + protected routing via middleware
- Admin boundary (`/admin`) gated by `profiles.role`
- Supabase schema migration with RLS policies
- Minimal CI (typecheck, lint, build)
- Decision docs in `docs/`

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

This repo includes an initial migration:

- `supabase/migrations/20251214190000_init.sql`

Apply it using either:

- Supabase Dashboard SQL editor, or
- Supabase CLI migrations (recommended for local development)

### 4) Run the app

```bash
npm run dev
```

Routes:

- `/` marketing home
- `/sign-in` sign-in
- `/app` protected app area
- `/admin` admin-only area

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run typecheck`
- `npm run lint`

## Docs

Start here:

- `docs/PROJECT_BRIEF.md`
- `docs/SCOPE_BOUNDARIES.md`
- `docs/ARCHITECTURE_INTENT.md`

## License

See `LICENSE`.
