---

# 📌 SCOPE_BOUNDARIES.md

This document is the guardrail for this starter. If a request conflicts with anything below, the correct response is:

"Not in v1. Add it as an optional extension or a follow-on repo."

---

## v1 Mission

This starter ships a **minimal auth + RLS foundation**:

- auth
- database schema + RLS
- role-based access (simple)
- protected routing
- operational defaults (logging, error handling, env validation)

It is intentionally **not** a "kitchen sink" starter.

---

## Will Not Build (v1)

- Billing (Stripe, Paddle, usage-based billing)
- AI / RAG / vector search
- Background jobs / queues / cron workers
- Webhooks (inbound/outbound)
- Multi-tenancy / organizations / team accounts
- SSO (SAML/OIDC), OAuth providers (Google/GitHub/etc.)
- Advanced permissions (beyond user/admin)
- Audit trails / immutable event logs
- Analytics / product telemetry
- In-app notifications
- Payments-related tax/VAT
- Mobile app scaffolding

---

## Intentional Postponements (v2+ Candidates)

- Rate limiting (beyond basic best practices)
- Storage (Supabase Storage) and file uploads
- Internationalization system implementation (bilingual UI is a goal, but the scaffold won’t ship full i18n plumbing in v1 unless it stays lightweight)
- Email templates + provider integration (Resend/Postmark/etc.)
- Observability vendor integration (Sentry/Datadog/etc.)

---

## Anti-Features (Hard No)

- "Example SaaS" domain features (tasks, CRM, notes, etc.) baked into core
- A giant shared `profiles` table used as a junk drawer for domain data
- Direct database access from the client without server-side boundaries
- Complex abstractions that hide Supabase behavior
- Premature generic plugin systems
- "Framework tourism" (swapping core tools without a concrete need)

---

## Rejected Framing / Terminology

- "Feature flags" (enterprise expectation)

Allowed instead:

- **Environment-based toggles (no flag service)**
  - Example: `ENABLE_SIGNUPS`, `ENABLE_ADMIN_UI`, `ENABLE_EMAIL_AUTH`

---

## What Goes Where

- Auth data belongs in Supabase Auth.
- Application domain data belongs in Postgres tables (public schema) with RLS.
- "Profiles" (if used) stays minimal (display name, avatar, role reference) and does not become a dumping ground.

---

## Testing / Mocking

- v1 may include basic test wiring, but detailed mocking strategies are **optional extensions** (documented, not mandated).

---
