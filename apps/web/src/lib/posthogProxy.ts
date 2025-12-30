export type PosthogProxyOptions = {
  upstream: string;
};

export async function proxyPosthogRequest(req: Request, opts: PosthogProxyOptions): Promise<Response> {
  const url = new URL(req.url);
  const upstream = new URL(opts.upstream);

  const pathAfterApi = url.pathname.replace(/^\/api\/posthog/, "");
  const upstreamUrl = new URL(pathAfterApi + url.search, upstream);

  const headers = new Headers(req.headers);
  headers.set("host", upstream.host);
  headers.set("accept-encoding", "identity");

  const init: RequestInit = {
    method: req.method,
    headers,
    body: ["GET", "HEAD"].includes(req.method.toUpperCase()) ? undefined : await req.arrayBuffer(),
    redirect: "manual"
  };

  const upstreamRes = await fetch(upstreamUrl, init);

  const resHeaders = new Headers(upstreamRes.headers);
  const setCookie = resHeaders.get("set-cookie");
  if (setCookie) {
    resHeaders.set("set-cookie", setCookie.replace(/;\s*Domain=[^;]+/gi, ""));
  }

  return new Response(upstreamRes.body, {
    status: upstreamRes.status,
    statusText: upstreamRes.statusText,
    headers: resHeaders
  });
}
