import { useCookies } from 'next-client-cookies';
import { RemoveItemLocalStorage } from './Storage';

export function LogOutAction() {
  RemoveItemLocalStorage('username');
  useCookies().set('session', '', { expires: new Date(0) });
}
