import { z } from "zod";

const publicSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default("ProductName"),
  NEXT_PUBLIC_WOLFE_LABS_NAME: z.string().min(1).default("Wolfe Labs"),
  NEXT_PUBLIC_WOLFE_LABS_URL: z.string().url().default("https://labs.rwolfe.io"),
  NEXT_PUBLIC_POSTHOG_ENABLED: z.enum(["true", "false"]).default("false"),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().url().default("https://app.posthog.com"),
  NEXT_PUBLIC_POSTHOG_API_HOST: z.string().default("/api/posthog")
});

const serverSchema = publicSchema.extend({
  DATABASE_URL: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(16),
  AUTH_GITHUB_ID: z.string().optional(),
  AUTH_GITHUB_SECRET: z.string().optional(),
  POSTHOG_ENABLED: z.enum(["true", "false"]).default("false"),
  POSTHOG_UPSTREAM_HOST: z.string().url().default("https://app.posthog.com")
});

export const publicEnv = publicSchema.parse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_WOLFE_LABS_NAME: process.env.NEXT_PUBLIC_WOLFE_LABS_NAME,
  NEXT_PUBLIC_WOLFE_LABS_URL: process.env.NEXT_PUBLIC_WOLFE_LABS_URL,
  NEXT_PUBLIC_POSTHOG_ENABLED: process.env.NEXT_PUBLIC_POSTHOG_ENABLED,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_POSTHOG_API_HOST: process.env.NEXT_PUBLIC_POSTHOG_API_HOST
});

export function getEnv() {
  return serverSchema.parse({
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    POSTHOG_ENABLED: process.env.POSTHOG_ENABLED,
    POSTHOG_UPSTREAM_HOST: process.env.POSTHOG_UPSTREAM_HOST,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_WOLFE_LABS_NAME: process.env.NEXT_PUBLIC_WOLFE_LABS_NAME,
    NEXT_PUBLIC_WOLFE_LABS_URL: process.env.NEXT_PUBLIC_WOLFE_LABS_URL,
    NEXT_PUBLIC_POSTHOG_ENABLED: process.env.NEXT_PUBLIC_POSTHOG_ENABLED,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_POSTHOG_API_HOST: process.env.NEXT_PUBLIC_POSTHOG_API_HOST
  });
}
