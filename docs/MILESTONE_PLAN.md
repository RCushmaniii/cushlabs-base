---

# 🗺️ MILESTONE_PLAN.md

Milestones are scoped to protect v1 clarity.

Each milestone is defined by:

- Goal
- Acceptance criteria
- Primary files/folders (planned)

---

## Milestone 0 — Repo Baseline + Tooling

### Goal

Establish a clean, repeatable baseline for a Next.js + TypeScript + Tailwind + Supabase project.

### Acceptance criteria

- TypeScript strict mode enabled.
- ESLint configured and enforced.
- Formatting standardized (Prettier or equivalent).
- Environment validation strategy selected and documented.
- Minimal CI exists (typecheck, lint, build).

### Planned files/folders

- `package.json`
- `tsconfig.json`
- `next.config.*`
- `.eslintrc.*`
- `.github/workflows/ci.yml`
- `docs/`

---

## Milestone 1 — Auth (Supabase) + Session Plumbing

### Goal

Ship end-to-end authentication with email / magic link and predictable session behavior.

### Acceptance criteria

- Users can sign in via email/magic link.
- Session is available server-side where needed.
- Sign-out works reliably.
- No auth logic duplicated across pages.

### Planned files/folders

- `app/(auth)/...`
- `lib/auth/...`
- `lib/supabase/...`
- `middleware.ts` (if used for session refresh)

---

## Milestone 2 — Authorization Boundaries (User/Admin)

### Goal

Enforce a simple role model with explicit boundaries.

### Acceptance criteria

- Two roles only: `user`, `admin`.
- Admin routes are protected by middleware and/or server-side checks.
- Unauthorized users cannot access admin UI or admin data.
- Role checks are centralized.

### Planned files/folders

- `middleware.ts`
- `lib/auth/require-role.ts` (or equivalent)
- `app/(admin)/...`

---

## Milestone 3 — Database Schema + RLS (First-Class)

### Goal

Define a small schema and enforce access with RLS.

### Acceptance criteria

- Schema migrations exist and are documented.
- RLS is enabled for relevant tables.
- Policies are documented and testable.
- A rule exists for `profiles` (minimal only).

### Planned files/folders

- `supabase/migrations/...`
- `supabase/seed.sql` (optional)
- `docs/` (schema + RLS conventions)

---

## Milestone 4 — Protected Routing + Layouts

### Goal

Make route-level protection predictable and hard to bypass.

### Acceptance criteria

- Logged-out users are redirected from protected areas.
- Logged-in users can access user areas.
- Admin-only areas are isolated and clearly labeled.
- Loading / error states exist for protected pages.

### Planned files/folders

- `app/(app)/...`
- `app/(admin)/...`
- `app/error.tsx` / `app/not-found.tsx` (or route-group equivalents)

---

## Milestone 5 — Operational Defaults

### Goal

Add the credibility features that make this “production-grade” without vendor lock-in.

### Acceptance criteria

- Server-side structured logging exists.
- Error handling philosophy is implemented consistently.
- A health check endpoint exists (`/api/health`).
- Canonical app metadata exists (name, version, env, commit optional).

### Planned files/folders

- `lib/logger.ts`
- `lib/app-config.ts`
- `app/api/health/route.ts`

---

## Milestone 6 — Docs + Polish (Scope Freeze)

### Goal

Make the repo understandable and reusable without tribal knowledge.

### Acceptance criteria

- README explains setup, constraints, and deletion guidance.
- Architecture intent is clear.
- Scope boundaries are explicit.
- File tree matches reality.

### Planned files/folders

- `docs/PROJECT_BRIEF.md`
- `docs/SCOPE_BOUNDARIES.md`
- `docs/ARCHITECTURE_INTENT.md`
- `docs/PRD_BASE.md`
- `docs/FILE_TREE.md`
- `docs/README.md`

---
