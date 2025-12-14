---
# CushLabs Base (Docs)

CushLabs Base is a production-grade SaaS scaffold built with Next.js App Router, TypeScript, Tailwind, and Supabase.

This `docs/README.md` is the “documentation index” for the decision-first assets.
---

## What This Repo Is

- A reusable foundation for real SaaS MVPs.
- Opinionated defaults that prevent common security and operational mistakes.

## What This Repo Is Not

- A startup idea.
- A kitchen-sink template.
- A demo app with fake auth.

---

## Start Here

- `docs/PROJECT_BRIEF.md`
  - the north star
- `docs/SCOPE_BOUNDARIES.md`
  - the guardrails
- `docs/ARCHITECTURE_INTENT.md`
  - the reasoning behind decisions

---

## Platform PRD + Plan

- `docs/PRD_BASE.md`
  - platform-focused PRD-lite
- `docs/MILESTONE_PLAN.md`
  - milestone acceptance criteria

---

## Proposed Structure

- `docs/FILE_TREE.md`
  - the intended file/folder shape before code is generated

---

## Operational Defaults (v1 Expectations)

- Structured logging (server-side only)
- Explicit error-handling philosophy
- Environment validation
- Health check route (`/api/health`)
- Minimal CI: typecheck, lint, build

---

## Environment-Based Toggles (No Flag Service)

The scaffold may expose simple toggles like:

- `ENABLE_SIGNUPS`
- `ENABLE_ADMIN_UI`
- `ENABLE_EMAIL_AUTH`

These should remain env-driven and not introduce a third-party flag dependency.

---

## Bilingual UI Guidance (en/es)

The goal is to support bilingual labels and text (`en` + `es`).

Implementation should remain lightweight in v1 and must not introduce unnecessary complexity.

---

## Next Step

If you want, I can proceed to Phase 3 (scaffolding) starting with the highest-risk core:

- auth + session plumbing
- middleware route protection
- schema + RLS

---
