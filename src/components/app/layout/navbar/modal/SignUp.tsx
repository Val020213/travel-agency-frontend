'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { IconX } from '@tabler/icons-react';
import { useFormState } from 'react-dom';
import { CreateUserAction } from '@/lib/actions/authentication/signUp';
import { SignUpState } from '@/lib/actions/authentication/signUp';
import { ContinueButton } from './ContinueButton';
import { TemporalCountries } from '@/lib/data/data';
import { othersLinks } from '@/lib/definitions';
import { ReactNode, Suspense } from 'react';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';

const SignUpTrigger = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const register = searchParams.get('register');

  return <Suspense>{register && children}</Suspense>;
};

export const SignUp = () => {
  const initialState = {};

  const [state, dispatch] = useFormState<SignUpState, FormData>(
    CreateUserAction,
    initialState
  );

  return (
    <SignUpTrigger>
      <dialog
        className={clsx(
          'flex flex-col rounded-3xl',
          'bg-white dark:bg-extends-darker-blue-900',
          'shadow-2xl px-8 pt-6 pb-12 w-[343px] sm:w-[480px] md:w-[520px]'
        )}
      >
        <form className='flex flex-col gap-4 md:gap-8 ' action={dispatch}>
          <div className='flex justify-start items-center flex-row text-gray-500 dark:text-extends-darker-blue-300'>
            <span className='text-lg leading-7 md:text-2xl font-medium w-full text-center'>
              Registrarse
            </span>
            <Link href={'?'} className='float-right'>
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
                required
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type='name'
                id='username'
                name='username'
                placeholder='travelilero123'
              />
              {state.errors?.username && (
                <p className='text-[#e11d48]'>{state.errors.username}</p>
              )}
            </div>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-300 dark:text-extends-darker-blue-300'
                htmlFor='name'
              >
                nombre completo
              </label>
              <input
                required
                className='md:text-xl border-b border-gray-300 dark:border-gray-400'
                type='full name'
                id='name'
                name='name'
                placeholder='Juan de la Torre'
              />
              {state.errors?.name && (
                <p className='text-[#e11d48]'>{state.errors.name}</p>
              )}
            </div>

            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-300 dark:text-extends-darker-blue-300'
                htmlFor='nationality'
              >
                nacionalidad
              </label>
              <Select name='nationality'>
                <SelectTrigger
                  id='country'
                  className='border-b border-gray-300 dark:border-gray-400'
                >
                  <SelectValue placeholder='Seleccione su país' />
                </SelectTrigger>
                <SelectContent
                  position='popper'
                  className='fixed pt-1 h-60 md:h-48'
                >
                  {TemporalCountries().map((country, index) => (
                    <SelectItem key={index} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {state.errors?.nationality && (
                <p className='text-[#e11d48]'>{state.errors.nationality}</p>
              )}
            </div>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-300 dark:text-extends-darker-blue-300 '
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
              {state.errors?.password && (
                <p className='text-[#e11d48]'>{state.errors.password}</p>
              )}
            </div>
            <div className='flex flex-col text-base leading-6 gap-2'>
              <label
                className='text-gray-300 dark:text-extends-darker-blue-300 '
                htmlFor='confirmPassword'
              >
                confirme su contraseña
              </label>
              <input
                required
                className='md:text-xl border-b border-gray-300  dark:border-gray-400'
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='********'
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
    </SignUpTrigger>
  );
};
