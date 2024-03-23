import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { authConfig } from './auth.config';


export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(1) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = { name: username, email: username + '@example.com', image: 'https://th.bing.com/th/id/OIP.4v3AGHeqbsTS3YeLX6RtxwHaGo?rs=1&pid=ImgDetMain' };
          if (!user) return null;
          return user;
        }
        return null;
      },
    }),
  ],
});


