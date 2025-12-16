---
# 🧾 PRD_BASE.md (Platform Edition)

This starter is a minimal foundation intended to be cloned and extended repeatedly.
---

## Problem Statement

Most “SaaS starters” fail in one of two ways:

- They are too small:
  - authentication is fake
  - database rules are missing
  - production concerns are hand-waved
- They are too big:
  - billing, analytics, flags, jobs, and multi-tenancy are bundled together
  - abstractions make it hard to delete or swap components

This starter exists to ship the **minimum credible foundation** that experienced developers expect.

---

## Target Users

### Primary

- Solo developer or small team building real MVPs quickly.
- Freelance/agency work where reuse and predictability matter.

### Secondary

- Hiring managers / technical reviewers evaluating engineering judgment.
- Future collaborators who need to understand project intent quickly.

---

## Core Capabilities (v1)

### Authentication

- Supabase Auth with email / magic link.
- Session handling that works with Next.js App Router.

### Authorization (simple, enforceable)

- Two roles: `user` and `admin`.
- Access enforced in:
  - middleware (routing boundaries)
  - database RLS (data boundaries)

### Database + RLS

- A small, documented schema.
- RLS policies are first-class.
- Typed access patterns (TypeScript-friendly) to reduce drift.

### Protected routing

- Auth-required routes are protected by default.
- Admin-only areas are isolated and explicit.

### Operational defaults

- Environment validation (fail fast on misconfig).
- Structured server-side logging.
- Clear error-handling philosophy.
- Health check endpoint.

### Minimal CI

- Automated checks for:
  - typecheck
  - lint
  - build

---

## Non-Goals / Exclusions (v1)

See `docs/SCOPE_BOUNDARIES.md`.

---

## Quality Bar (Definition of Production-Grade)

### Security

- Authorization cannot be bypassed by client changes.
- RLS is not optional.
- Sensitive logic stays server-side.

### Maintainability

- Clear module boundaries (auth, db, logging).
- Delete-friendly structure (features can be removed without refactors).
- Minimal abstractions; prefer obvious code.

### Operational readiness

- Errors are handled deliberately:
  - expected errors return user-safe messages
  - unexpected errors are logged with context and show a generic fallback
- Logging is structured in production.
- Health checks exist for deployments.

### Developer experience

- Clear docs.
- Predictable env configuration.
- Minimal setup steps.

---

## Scope Freeze Criteria (What “Done” Means)

v1 is “done” when:

- auth works end-to-end
- protected routes behave correctly
- admin boundary is enforced
- schema + RLS are present and documented
- env validation exists
- logging + error handling are production-safe
- health check exists
- CI stub exists
- repo is understandable from docs alone

---

## Upgrade Paths (v2+)

This starter should be designed so these can be added without a rewrite:

- billing
- background jobs
- webhooks
- multi-tenancy
- advanced permissions
- vendor observability

---

## Acceptance Tests (Human-Level)

- A new project can be created from the scaffold with minimal edits.
- A reviewer can identify:
  - where auth lives
  - where routing boundaries are enforced
  - where RLS is defined
  - how to add a new table safely
- Production debugging is possible without adding a vendor.

---
