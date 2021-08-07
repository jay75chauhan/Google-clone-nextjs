import "../styles/globals.css";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 5,
  color: "#4285F4",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

// Retrieve Clerk settings from the environment
const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;
const clerkSignInURL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN;

/**
 * List pages you want to be publicly accessible, or leave empty if
 * every page requires authentication. Use this naming strategy:
 *  "/"              for pages/index.js
 *  "/foo"           for pages/foo/index.js
 *  "/foo/bar"       for pages/foo/bar.js
 *  "/foo/[...bar]"  for pages/foo/[...bar].js
 */
const publicPages = [];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  /**
   * If the current route is listed as public, render it directly.
   * Otherwise, use Clerk to require authentication.
   */
  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => router.push(to)}
    >
      {publicPages.includes(router.pathname) ? (
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      ) : (
        <>
          <SignedIn>
            <ThemeProvider attribute="class">
              <Component {...pageProps} />
            </ThemeProvider>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
