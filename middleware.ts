"use client";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
// import { createRouteMatcher } from "@clerk/nextjs/server";
// const protectedRoutes = createRouteMatcher();

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware

// @ts-nocheck
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  // publicRoutes: ['/anyone-can-visit-this-route'],
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};
