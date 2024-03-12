import { useCookies } from 'next-client-cookies';

export function LogOutAction() {
  localStorage.removeItem('session');
  useCookies().set('session', '', { expires: new Date(0) });
}
