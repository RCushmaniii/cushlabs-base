---
# 🏗️ ARCHITECTURE_INTENT.md

This document explains *why* CushLabs Base is structured the way it is.

It is intentionally light on implementation details.
---

## Goals

- Provide a production-grade SaaS foundation with minimal surface area.
- Keep security and correctness as the default (not optional).
- Preserve “escape hatches” so the base can evolve without a rewrite.

---

## Primary Technology Choices

### Next.js App Router

- Chosen for:
  - server-first primitives
  - modern routing and layouts
  - clear separation between server and client components
- Avoids:
  - custom routing frameworks
  - bespoke SSR wiring

### TypeScript (strict)

- The scaffold should fail early during development.
- Runtime validation still exists (env + inbound payloads), but strict types reduce accidental drift.

### Tailwind CSS

- Fast iteration without a design-system tax.
- Encourages composable UI without locking into a heavy component framework.

### Supabase (Auth + Postgres)

- A pragmatic default for authentication, Postgres, and RLS.
- The base treats Supabase as an implementation detail, not the domain model.

---

## Security Model (Non-Negotiable)

### RLS-first

- Data access is enforced at the database layer.
- Application code should not be the only line of defense.

### Server-side boundaries

- Business-critical logic runs server-side.
- Client code should never be trusted for authorization.

### Role model

- v1 supports only `user` and `admin`.
- Anything more complex is a follow-on milestone (not a “quick tweak”).

---

## Operational Defaults

### Logging

- Structured logging is server-side only.
- Goal:
  - expected visibility in production
  - minimal/no vendor coupling
- Behavior:
  - dev: human-readable logs
  - prod: JSON logs

### Error handling philosophy

- Expected errors:
  - return user-safe messages
  - preserve actionable detail for logs
- Unexpected errors:
  - log with request context
  - return generic fallbacks
- No silent failures.

### Health check

- A minimal `/api/health` route exists to support:
  - uptime checks
  - container/orchestrator readiness
  - basic debugging

---

## Data Model Discipline

### Naming

- Tables are named for domain concepts, not implementation convenience.
- Avoid “junk drawer” tables.

### Ownership

- Schema changes are explicit and migration-driven.
- RLS policies are part of the schema contract.

### `profiles` rule

- If a `profiles` table exists, it stays minimal.
- Domain data belongs in dedicated tables.

---

## Escape Hatches (Intentional)

These are explicit “don’t paint yourself into a corner” guarantees.

- Supabase can be replaced later.
  - The domain layer should not depend on Supabase-specific semantics.
- Auth is isolated.
  - Session + role checks are centralized.
- UI is swappable.
  - No domain logic embedded in UI components.
- Observability vendors are optional.
  - Logging and error handling work without Sentry/Datadog/etc.

---

## Explicit Non-Goals

See `docs/SCOPE_BOUNDARIES.md`.
