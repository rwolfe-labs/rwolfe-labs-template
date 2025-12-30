import "@rwolfe-labs/ui/styles.css";
import "../styles/globals.css";
import { PostHogBootstrap } from "../lib/posthog/provider";
import { publicEnv } from "../lib/env";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const appName = publicEnv.NEXT_PUBLIC_APP_NAME;
  const labsName = publicEnv.NEXT_PUBLIC_WOLFE_LABS_NAME;
  const labsUrl = publicEnv.NEXT_PUBLIC_WOLFE_LABS_URL;

  return (
    <html lang="en">
      <body>
        <PostHogBootstrap />
        <header className="wl-header">
          <div className="wl-header__left">
            <span className="wl-appname">{appName}</span>
            <a className="wl-byline" href={labsUrl}>
              by {labsName}
            </a>
          </div>
          <nav className="wl-header__right">
            <a href="/support">Support</a>
            <a href="/status">Status</a>
            <a href="/privacy">Privacy</a>
            <a href="/source">Source</a>
          </nav>
        </header>
        <main className="wl-main">{children}</main>
        <footer className="wl-footer">
          <span>A Wolfe Labs product</span>
          <span className="wl-dot">*</span>
          <a href="/support">Support</a>
          <span className="wl-dot">*</span>
          <a href="/privacy">Privacy</a>
          <span className="wl-dot">*</span>
          <a href="/source">Source</a>
        </footer>
      </body>
    </html>
  );
}
