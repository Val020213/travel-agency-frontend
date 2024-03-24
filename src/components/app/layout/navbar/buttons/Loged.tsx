'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { othersLinks } from '@/lib/definitions';
import { DeleteSession } from '@/lib/utils/delete';
import { Suspense, useState } from 'react';
import { UserSession } from './UserSession';

export async function Loged() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='block relative'>
      <button onClick={() => setOpen(!open)}>
        <UserSession />
      </button>
      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className={clsx(
            'absolute',
            'z-10',
            'pt-4',
            'w-48',
            'bg-white',
            'dark:bg-extends-darker-blue-950',
            'shadow-lg',
            'rounded-lg',
            'p-2'
          )}
        >
          <button
            onClick={() => setOpen(!open)}
            type='submit'
            className={clsx(
              'w-full',
              'text-left',
              'py-1',
              'hover:bg-gray-100',
              'dark:hover:bg-gray-900'
            )}
          >
            <Link href={othersLinks.profile}>Perfil</Link>
          </button>
          <form action={DeleteSession}>
            <button
              type='submit'
              className={clsx(
                'w-full',
                'text-left',
                'py-1',
                'hover:bg-gray-100',
                'dark:hover:bg-gray-900'
              )}
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
