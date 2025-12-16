---

# 🌲 FILE_TREE.md (Proposed)

This is the proposed “shape of the system” for this starter.

It is intended to be:

- easy to delete from
- hard to misuse
- clear about ownership boundaries

---

## Root

- `app/` — Next.js App Router routes, layouts, and route groups.
- `lib/` — Server/client utilities (auth, config, logging). Keep business-critical logic server-side.
- `components/` — Reusable UI components only (no data fetching).
- `styles/` — Global styles and Tailwind entry.
- `supabase/` — Local Supabase config and migrations (schema + RLS).
- `docs/` — Decision docs, architecture intent, scope boundaries.
- `.github/workflows/` — Minimal CI.

---

## Proposed Tree

```
.
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx
│  │  └─ layout.tsx
│  ├─ (auth)/
│  │  ├─ sign-in/page.tsx
│  │  └─ callback/route.ts
│  ├─ (app)/
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ (admin)/
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ api/
│  │  └─ health/route.ts
│  ├─ error.tsx
│  └─ not-found.tsx
│
├─ components/
│  ├─ ui/
│  └─ ...
│
├─ lib/
│  ├─ app-config.ts
│  ├─ env.ts
│  ├─ logger.ts
│  ├─ auth/
│  │  ├─ session.ts
│  │  ├─ require-auth.ts
│  │  └─ require-role.ts
│  └─ supabase/
│     ├─ server.ts
│     └─ client.ts
│
├─ styles/
│  └─ globals.css
│
├─ supabase/
│  ├─ migrations/
│  └─ config.toml
│
├─ docs/
│  ├─ PROJECT_BRIEF.md
│  ├─ SCOPE_BOUNDARIES.md
│  ├─ ARCHITECTURE_INTENT.md
│  ├─ PRD_BASE.md
│  ├─ MILESTONE_PLAN.md
│  ├─ FILE_TREE.md
│  └─ README.md
│
├─ middleware.ts
├─ package.json
├─ tsconfig.json
├─ next.config.*
├─ tailwind.config.*
└─ .github/workflows/ci.yml
```

---

## “Delete Me First” Guidance (Planned)

These areas should be safe to remove without refactoring core auth/db boundaries:

- `(marketing)/` route group
- `components/ui/` examples
- any example tables/migrations that are clearly labeled as samples
- admin UI pages (if you don’t need admin in a specific project)

---

## Ownership Rules (Planned)

- `lib/auth/*` owns authentication + role checks.
- `supabase/migrations/*` owns schema + RLS.
- UI components should not “know” about Supabase.
- Route handlers can orchestrate, but domain rules should not be scattered across routes.

---
