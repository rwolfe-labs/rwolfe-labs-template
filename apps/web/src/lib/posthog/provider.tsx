"use client";

import { useEffect } from "react";
import { initPostHog } from "./client";

export function PostHogBootstrap() {
  useEffect(() => {
    initPostHog();
  }, []);
  return null;
}
