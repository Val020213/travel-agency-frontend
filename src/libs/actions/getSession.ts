import { decrypt } from './secure';
import { Session } from '../definitions';
import { cookies } from 'next/headers';

export async function getSession(): Promise<Session | undefined> {
  const session = cookies().get('session')?.value;
  if (!session) return undefined;
  return await decrypt(session);
}
