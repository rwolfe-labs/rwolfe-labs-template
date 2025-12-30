import posthog from "posthog-js";
import { publicEnv } from "../env";

export function initPostHog() {
  if (typeof window === "undefined") return;
  if (publicEnv.NEXT_PUBLIC_POSTHOG_ENABLED !== "true") return;
  if (!publicEnv.NEXT_PUBLIC_POSTHOG_KEY) return;

  posthog.init(publicEnv.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: publicEnv.NEXT_PUBLIC_POSTHOG_API_HOST,
    ui_host: publicEnv.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false,
    autocapture: false
  });
}

export { posthog };
