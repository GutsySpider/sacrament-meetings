import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isProtected =
        nextUrl.pathname.startsWith("/meetings/new");

      // Protect the create meeting page
      if (isProtected) {
        return isLoggedIn;
      }

      // If already logged in, don't allow access to login page
      if (
        isLoggedIn &&
        nextUrl.pathname === "/login"
      ) {
        return Response.redirect(
          new URL("/meetings/new", nextUrl)
        );
      }

      return true;
    },
  },

  providers: [],
} satisfies NextAuthConfig;