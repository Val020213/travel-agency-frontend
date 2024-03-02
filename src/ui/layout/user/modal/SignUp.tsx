'use client';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { IconX, IconBrandInstagram } from '@tabler/icons-react';

export const SignUp = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <dialog
      open={open}
      className={clsx(
        'flex flex-col rounded-[32px] fixed enter',
        'bg-white dark:bg-extends-darker-blue-900',
        'shadow-2xl px-8 pt-6 pb-12 w-[343px] sm:w-[480px] md:w-[520px] z-40 top-8 md:top-16 lg:top-20',
        'overflow-y-auto'
      )}
    >
      <form className='flex flex-col gap-4 md:gap-8 w-full *:w-full'>
        <div className='flex justify-start items-center flex-row text-gray-500 dark:text-extends-darker-blue-300'>
          <span className='text-lg leading-7 md:text-2xl font-medium w-full text-center'>
            Registrarse
          </span>
          <button onClick={() => setOpen(!open)} className='float-right'>
            <IconX stroke={1.5} className='h-6 w-6' color='currentColor' />
          </button>
        </div>
        <span className='text-lg leading-7 md:text-2xl font-medium text-gray-800 dark:text-gray-50'>
          Bienvenido a Travelix
        </span>
        <div className='flex flex-col *:w-full gap-6'>
          <div className='flex flex-col text-base leading-6 gap-2'>
            <label
              className='text-gray-600 dark:text-extends-darker-blue-200'
              htmlFor='name'
            >
              nombre de usuario o gmail
            </label>
            <input
              className='md:text-xl border-b border-gray-300 dark:border-gray-400'
              type='text'
              id='name'
              placeholder='travelilero@gmail.com'
              required
            />
          </div>
          <div className='flex flex-col text-base leading-6 gap-2'>
            <label
              className='text-gray-600 dark:text-extends-darker-blue-200 '
              htmlFor='password'
            >
              contraseña
            </label>
            <input
              className='md:text-xl border-b border-gray-300  dark:border-gray-400'
              type='password'
              id='password'
              placeholder='********'
              required
            />
          </div>
          <div className='flex flex-col text-base leading-6 gap-2'>
            <label
              className='text-gray-600 dark:text-extends-darker-blue-200 '
              htmlFor='password'
            >
              confirme su contraseña
            </label>
            <input
              className='md:text-xl border-b border-gray-300  dark:border-gray-400'
              type='password'
              id='confirm_password'
              placeholder='********'
              required
            />
          </div>
        </div>
        <div className='flex flex-col *:w-full gap-4'>
          <div
            onClick={() => setOpen(!open)}
            className={clsx(
              'text-blue-500 hover:text-blue-600',
              'cursor-pointer text-right text-[15px] px-1'
            )}
          >
            ¿Tienes cuenta? Inicia sección aqui
          </div>
          <button
            className={clsx(
              'flex items-center justify-center',
              'bg-orangePinkRight text-white text-opacity-100 md:text-xl leading-7',
              'rounded-lg py-4 px-4 font-medium',
              ' hover:ring-4 hover:ring-rose-500 '
            )}
          >
            Continuar
          </button>
        </div>
        <div className='flex flex-col md:flex-row justify-start items-center gap-4'>
          <div className='text-gray-600 dark:text-extends-darker-blue-200 min-w-max'>
            continuar con
          </div>
          <div className='flex flex-row gap-2 w-full *:w-full'>
            <button
              className={clsx(
                'flex justify-center items-center py-1',
                'rounded-lg',
                'bg-slate-50 hover:bg-slate-200'
              )}
            >
              <Image
                src={require('@/ui/assets/google.png')}
                width={48}
                height={48}
                alt='google'
                className='h-12 w-12'
              />
            </button>
            <button
              className={clsx(
                'flex justify-center items-center py-1',
                'rounded-lg',
                'bg-gradient-to-t from-blue-600 to-blue-400',
                'hover:bg-gradient-to-t hover:from-blue-700 hover:to-blue-500'
              )}
            >
              <Image
                src={require('@/ui/assets/facebook.png')}
                width={24}
                height={48}
                alt='facebook'
                className='h-12 w-6'
              />
            </button>
            <button
              className={clsx(
                'flex justify-center items-center py-1',
                'rounded-xl',
                'bg-gradient-to-b from-pink-600 via-rose-600 to-rose-500',
                'hover:bg-gradient-to-b hover:from-pink-700 hover:via-rose-700 hover:to-rose-600'
              )}
            >
              <IconBrandInstagram
                stroke={2}
                className='h-12 w-12'
                color='white'
              />
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
};
