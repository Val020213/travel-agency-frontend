'use client';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { IconX } from '@tabler/icons-react';
import { useFormState } from 'react-dom';
import { CreateUserAction } from '@/lib/actions/signUp';
import { SignUpState } from '@/lib/actions/signUp';
import { ContinueButton } from './ContinueButton';
import { FetchCountries} from '@/lib/data/data';
import { othersLinks } from '@/lib/data/data';
import { country } from '@/lib/definitions';

export async function SignUp () {
  const initialState = {};

  const [state, dispatch] = useFormState<SignUpState, FormData>(
    CreateUserAction,
    initialState
  );

  const searchParams = useSearchParams();
  const register = searchParams.get('register');
  const pathname = usePathname();
  
  const Countries = await FetchCountries();

  return (
    register && (
      <dialog
        className={clsx(
          'flex flex-col rounded-[32px]',
          'bg-white dark:bg-extends-darker-blue-900',
          'shadow-2xl px-8 pt-6 pb-12 w-[343px] sm:w-[480px] md:w-[520px]'
        )}
      >
        <form
          className='flex flex-col gap-4 md:gap-8 w-full *:w-full'
          action={dispatch}
        >
          <div className='flex justify-start items-center flex-row text-gray-500 dark:text-extends-darker-blue-300'>
            <span className='text-lg leading-7 md:text-2xl font-medium w-full text-center'>
              Registrarse
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
                className='text-gray-300 dark:text-extends-darker-blue-300'
                htmlFor='username'
              >
                nombre de usuario
              </label>
              <input
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type='name'
                id='username'
                name='username'
                placeholder='travelilero123'
                required
              />
            </div>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-300 dark:text-extends-darker-blue-300'
                htmlFor='name'
              >
                nombre completo
              </label>
              <input
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type='name'
                id='name'
                name='name'
                placeholder='Juan de la Torre'
                required
              />
            </div>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-300 dark:text-extends-darker-blue-300'
                htmlFor='nationality'
              >
                nacionalidad
              </label>
              <select
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                id='nationality'
                name='nationality'
                required
              >
                <option className='text-gray-300 dark:text-extends-darker-blue-300' value=''>Selecciona tu nacionalidad</option>
                {
                  Countries.map((country: country) => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  ))
                }
              </select>
            </div>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-300 dark:text-extends-darker-blue-300 '
                htmlFor='password'
              >
                contraseña
              </label>
              <input
                className='md:text-xl border-b border-gray-300  dark:border-gray-400'
                type='password'
                id='password'
                name='password'
                placeholder='********'
                required
              />
            </div>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-300 dark:text-extends-darker-blue-300 '
                htmlFor='confirmPassword'
              >
                confirme su contraseña
              </label>
              <input
                className='md:text-xl border-b border-gray-300  dark:border-gray-400'
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='********'
                required
              />
            </div>
          </div>
          <div className='flex flex-col *:w-full gap-4'>
            <div>
              {state.errors && (
                <p className='text-[#e11d48]'>{state.message}</p>
              )}
            </div>
            <Link
              href={othersLinks.openLogin}
              className={clsx(
                'text-blue-500 hover:text-blue-600',
                'cursor-pointer text-right text-[15px] px-1'
              )}
            >
              ¿Tienes cuenta? Inicia aquí
            </Link>
            <ContinueButton />
          </div>
        </form>
      </dialog>
    )
  );
};
