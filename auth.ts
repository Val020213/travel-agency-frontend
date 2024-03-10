import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
// import { sql } from '@vercel/postgres';
// import type { User } from '@/app/lib/definitions';
// import bcrypt from 'bcrypt';
import { use } from 'react';

// async function getUser(email: string): Promise<User | undefined> {
//     try {
//         const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//         return user.rows[0];
//     } catch (error) {
//         console.error('Failed to fetch user:', error);
//         throw new Error('Failed to fetch user.');
//     }
// }

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = username;
          // const user = await getUser(email);
          // if (!user) return null;
          // const passwordMatches = await bcrypt.compare(password, user.password);
          // if (passwordMatches) {
          //     return user;
          // }
        }

        return null;
      },
    }),
  ],
});
