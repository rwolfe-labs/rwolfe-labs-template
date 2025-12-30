# ADR 0001: Stack decisions

## Status
Accepted

## Context
I am building a solo-first SaaS portfolio. I need high leverage, low ops overhead, and a cohesive UI/ops posture.

## Decision
- Apps: React + Next.js
- Docs: Astro Starlight
- UI primitives: Radix (unstyled)
- Observability: PostHog by default
- License: AGPL-3.0-or-later

## Alternatives considered
- SvelteKit-only
- Monorepo for all products

## Consequences
- Strong ecosystem + predictable scaffolding.
- Products remain independent; shared packages are versioned.
