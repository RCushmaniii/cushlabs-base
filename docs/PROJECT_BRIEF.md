---

# 📘 PROJECT_BRIEF.md

## Project Name

**Next.js Supabase Auth Starter**

## One-Line Description

A minimal Next.js App Router starter built around Supabase Auth, SSR-friendly session refresh, and an RLS-first database posture.

---

## Purpose

This repo exists to provide a **small, production-minded foundation** for applications that need real authentication and real database security.

This project prioritizes:

- correctness over cleverness
- boring, proven patterns over novelty
- explicit boundaries over feature creep

The goal is to reduce setup time, prevent common auth/RLS mistakes, and provide a starter that is easy to clone and extend.

---

## Intended Use Cases

This starter is designed to be used for:

- **MVPs and internal tools**

  - Fast, safe starting point with real auth and data

- **Portfolio demonstration**

  - Evidence of senior-level systems thinking

This is **not** designed for:

- one-off landing pages
- marketing sites only
- learning exercises
- framework experimentation

---

## Target User

The primary user is:

- A solo developer or small team
- Comfortable with React and TypeScript
- Building a real product (not a demo)
- Wants sane defaults without fighting abstractions

The secondary user is:

- A reviewer, hiring manager, or technical client
- Evaluating engineering judgment and architectural clarity

---

## Core Principles

- **Secure by default**
- **Explicit over clever**
- **Easy to delete > hard to extend**
- **No hidden magic**
- **Minimal surface area**
- **Predictable behavior in production**

---

## What “Done” Means (v1)

v1 is complete when:

- Auth works end-to-end (email + magic link)
- Role-based access is enforced at the middleware level
- Database schema and RLS are defined and documented
- Protected routes and layouts behave correctly
- Admin access is isolated and explicit
- Environment configuration is validated
- Documentation explains how and why things work
- The repo can be cloned and extended without refactoring

---

## Upgrade Path (Out of Scope for v1)

The architecture should **allow**, but not include:

- Billing (Stripe)
- AI / RAG features
- Background jobs
- Webhooks
- Multi-tenant organizations
- SSO
- Advanced permissions

These are intentional v2+ extensions.

---

## Longevity

This project is expected to:

- Live for years
- Be reused dozens of times
- Evolve cautiously
- Remain boring and dependable

---
