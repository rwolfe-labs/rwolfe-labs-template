import { proxyPosthogRequest } from "../../../../lib/posthogProxy";
import { getEnv } from "../../../../lib/env";

export const runtime = "nodejs";

function getUpstreamHost() {
  return getEnv().POSTHOG_UPSTREAM_HOST || "https://app.posthog.com";
}

export async function GET(req: Request) {
  return proxyPosthogRequest(req, { upstream: getUpstreamHost() });
}

export async function POST(req: Request) {
  return proxyPosthogRequest(req, { upstream: getUpstreamHost() });
}

export async function OPTIONS(req: Request) {
  return proxyPosthogRequest(req, { upstream: getUpstreamHost() });
}
