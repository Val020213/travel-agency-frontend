
import clsx from 'clsx';
import Link from 'next/link';
import { IconUserCircle } from '@tabler/icons-react';
import { othersLinks } from '@/lib/definitions';
import { ReadSession } from '@/lib/utils/read';
import { DeleteSession } from '@/lib/utils/delete';
import { Suspense, useState } from 'react';

async function UserSession({ action }: { action: () => void }) {
  'use server'
  const session = await ReadSession()
  const name = JSON.parse(session).username
  return <button
    onClick={action}
    className={clsx(
      'text-gray-800',
      'opacity-80',
      'hover:opacity-100',
      'flex',
      'flex-row',
      'items-center',
      'gap-1',
      'dark:text-gray-50',
      'text-xl',
      'leading-7',
      'font-semibold'
    )}
  >
    <span className='hidden sm:block'>{name}</span>
    <IconUserCircle size={36} stroke={1.5} />
  </button>
}

export function Loged() {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className='block relative'>
      <Suspense>
        <UserSession action={() => setOpen(!open)} />
      </Suspense>
      <UserOptions open={open} />
    </div>
  );
};

const UserOptions = ({ open }: { open: boolean }) => {
  return (
    open &&
    <div className={clsx('fixed', 'z-10', 'top-16', 'right-0', 'w-48', 'bg-white', 'dark:bg-extends-darker-blue', 'shadow-lg', 'rounded-lg', 'p-2')}>
      <Link href={othersLinks.profile}>
        Perfil
      </Link>
      <form action={DeleteSession}>
        <button type='submit' className={clsx('w-full', 'text-left', 'py-1', 'hover:bg-gray-100', 'dark:hover:bg-gray-800')}>
          Cerrar sesión
        </button>
      </form>
    </div>


  )
}