"use client";

import { analytics } from "../lib/posthog/events";

export function ClientDemoButton() {
  return (
    <button
      className="wl-button wl-button--primary"
      onClick={() => analytics.capture("feature_used:demo_button")}
    >
      Demo capture
      <span className="wl-button__notch" />
    </button>
  );
}
