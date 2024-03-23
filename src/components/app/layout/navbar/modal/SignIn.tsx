'use client'
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { IconX } from '@tabler/icons-react';
import { useFormState } from 'react-dom';
import { SignInState, ValidateUserAction } from '@/lib/actions/signIn';
import Link from 'next/link';
import { ContinueButton } from './ContinueButton';
import { othersLinks } from '@/lib/definitions';

export const SignIn = () => {
  const initialState = {};
  const [state, dispatch] = useFormState<SignInState, FormData>(
    ValidateUserAction,
    initialState
  );

  const searchParams = useSearchParams();
  const login = searchParams.get('login');
  const pathname = usePathname();

  return (
    login && (
      <dialog
        className={clsx(
          'flex flex-col rounded-[32px]',
          'bg-white dark:bg-extends-darker-blue-900',
          'shadow-2xl px-8 pt-6 pb-12 w-[343px] sm:w-[480px] md:w-[520px] lg:w-[480px]'
        )}
      >
        <form
          className='flex flex-col gap-4 md:gap-8 w-full *:w-full'
          action={dispatch}
        >
          <div className='flex justify-start items-center flex-row text-gray-500 dark:text-extends-darker-blue-300'>
            <span className='text-lg leading-7 md:text-2xl font-medium w-full text-center'>
              Iniciar Sesión
            </span>
            <Link href={pathname} className='float-right'>
              <IconX stroke={1.5} className='h-6 w-6' color='currentColor' />
            </Link>
          </div>
          <span className='text-lg leading-7 md:text-2xl font-medium text-gray-800 dark:text-gray-50'>
            Bienvenido a Travelix
          </span>
          <div className='flex flex-col *:w-full gap-6'>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-600 dark:text-extends-darker-blue-200'
                htmlFor='username'
              >
                nombre de usuario
              </label>
              <input
                required
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type='name'
                id='username'
                name='username'
                placeholder='travelilero123'
              />
              {
                state.errors?.username && <p className='text-[#e11d48]'>{state.errors.username}</p>
              }
            </div>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-600 dark:text-extends-darker-blue-200 '
                htmlFor='password'
              >
                contraseña
              </label>
              <input
                required
                className='md:text-xl border-b border-gray-300  dark:border-gray-400'
                type='password'
                id='password'
                name='password'
                placeholder='********'
              />
              {
                state.errors?.password && <p className='text-[#e11d48]'>{state.errors.password}</p>
              }
            </div>
          </div>
          <div className='flex flex-col *:w-full gap-4'>
            <div>
              {state.errors && (
                <p className='text-[#e11d48]'>{state.message}</p>
              )}
            </div>
            <Link
              href={othersLinks.openRegister}
              className={clsx(
                'text-blue-500 hover:text-blue-600',
                'cursor-pointer text-right text-[15px] px-1'
              )}
            >
              ¿No tienes cuenta? Registrate
            </Link>
            <ContinueButton />
          </div>

        </form>
      </dialog>
    )
  );
};
