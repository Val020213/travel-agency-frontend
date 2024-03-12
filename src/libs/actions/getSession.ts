import { decrypt } from './secure';
import { Session } from '../definitions';
import { useCookies } from 'next-client-cookies';

export async function GetSession(): Promise<Session | undefined> {
  // const session = cookies().get('session')?.value;
  const session = useCookies().get('session');
  if (!session) return undefined;
  return await decrypt(session);
}
