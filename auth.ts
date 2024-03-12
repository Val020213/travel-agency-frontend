import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/libs/definitions';
import { use } from 'react';

async function getUser(username: string): Promise<User | undefined> {
  try {
    const response = await fetch(`/api/users/${username}`);
    if (response.ok) {
      return response.json();
    }
    if (username === userSeccion['admin']) {
      return {
        username: 'admin',
        name: 'Osvaldo',
        nationality: 'Cubano',
        email: 'travelix@gmail.com',
        telefono: '555-555-5555',
      };
    }
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

export const userSeccion: { [key: string]: string | undefined } = {
  username: undefined,
  admin: 'Osvaldo',
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
          console.log('user', user);
          if (!user) return null;
          return user;
        }
        return null;
      },
    }),
  ],
});
