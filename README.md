# Product Template (Wolfe Labs)

This is the Wolfe Labs product starter template:
- Next.js app (`apps/web`)
- Astro Starlight docs (`apps/docs`)
- Docker Compose self-host baseline (`docker/compose.yml`)
- CI + CodeQL
- PostHog analytics scaffolding (privacy-respecting)

## Identity
Every product is product-first, with a consistent through-line:
- "by Wolfe Labs" shown at auth + footer
- Footer links: Support | Status | Privacy | Source

## Local dev

### Requirements
- Node 20+
- pnpm
- Docker (for local Postgres if needed)

### Setup
1) Copy env
```bash
cp apps/web/.env.example apps/web/.env
```

2) Install

```bash
pnpm install
```

3) Run

```bash
pnpm dev
```

* Web: http://localhost:3000
* Docs: http://localhost:4321

## Self-host (Docker Compose)

See docs: `apps/docs/src/content/docs/self-hosting.mdx`
