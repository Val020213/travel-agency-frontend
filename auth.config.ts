import type { NextAuthConfig } from 'next-auth';
import { redirect } from 'next/navigation';

export const authConfig = {
  pages: {
    signIn: '/?login=true',
  },
  providers: [],
  
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      
      const Error404Pages: string[] = [
        '/dashboard',
        '/profile',
      ];

      const isLoggedIn = !!auth?.user;
      const isOnProhibitedPage = Error404Pages.some((page) => nextUrl.toString().startsWith(page));

      if (isOnProhibitedPage) {
        console.log('isOnProhibitedPage');
        if (isLoggedIn) return true;
        console.log('Is not logged in');
        return false; // Redirect unauthenticated users to login page
      } 
      else {
        return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
  },
} satisfies NextAuthConfig;


