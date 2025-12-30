import { posthog } from "./client";
import { publicEnv } from "../env";

function enabled() {
  return publicEnv.NEXT_PUBLIC_POSTHOG_ENABLED === "true" && !!publicEnv.NEXT_PUBLIC_POSTHOG_KEY;
}

export const analytics = {
  capture(event: string, properties?: Record<string, unknown>) {
    if (!enabled()) return;
    posthog.capture(event, properties);
  }
};
