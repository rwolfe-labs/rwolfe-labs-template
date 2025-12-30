AGENT.md - apps/web

Constraints

Life-protect first. Keep changes small and supportable.

PostHog policy
- Self-host default: disabled unless NEXT_PUBLIC_POSTHOG_ENABLED=true
- Hosted default: enabled, but no sensitive payloads
- Events must go through first-party proxy (/api/posthog)

Footers

Every product screen should include:
- "A Wolfe Labs product"
- Support link
- Privacy link
- Source / License link
