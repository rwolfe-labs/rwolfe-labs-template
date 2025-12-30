# Architecture (template)

## Boundaries

- Product is independent, but uses Wolfe Labs conventions.
- Hosted vs self-host is packaging, not feature gating.

## Analytics

- PostHog ingestion is first-party via /api/posthog proxy.
- Self-host: analytics disabled by default unless enabled explicitly.
