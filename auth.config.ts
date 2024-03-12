import type { NextAuthConfig } from 'next-auth';
import credentials from 'next-auth/providers/credentials';

const unauthorizedPages: string[] = ['/profile', 'profile', '/'];

export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      console.log('isLoggedIn', isLoggedIn);
      console.log('nextUrl', nextUrl);
      console.log('nextUrl.pathname', nextUrl.pathname);
      console.log('unauthorizedPages', unauthorizedPages);

      const isOnUnauthorizedPage = unauthorizedPages.find((page) =>
        nextUrl.pathname.startsWith(page)
      );
      console.log('isOnUnauthorizedPage', isOnUnauthorizedPage);

      if (isOnUnauthorizedPage) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL(isOnUnauthorizedPage || '', nextUrl));
      }
    },
  },
  providers: [credentials], // Add providers with an empty array for now
} satisfies NextAuthConfig;
