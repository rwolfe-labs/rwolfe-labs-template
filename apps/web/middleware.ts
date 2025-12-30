export { default } from "next-auth/middleware";

// Protect everything except landing and auth endpoints.
export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|$).*)"]
};
