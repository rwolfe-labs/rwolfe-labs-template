import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { getEnv } from "../../../../lib/env";

const env = getEnv();
const hasGithub = !!env.AUTH_GITHUB_ID && !!env.AUTH_GITHUB_SECRET;

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: hasGithub
    ? [
        GitHub({
          clientId: env.AUTH_GITHUB_ID!,
          clientSecret: env.AUTH_GITHUB_SECRET!
        })
      ]
    : [],
  pages: {
    signIn: "/"
  }
});

export const GET = handlers.GET;
export const POST = handlers.POST;
