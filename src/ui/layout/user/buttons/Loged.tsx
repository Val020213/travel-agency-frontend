import clsx from 'clsx';
import Link from 'next/link';
import { IconUserCircle } from '@tabler/icons-react';
import { useContext } from 'react';

export const Loged = ({ name }: { name: string }) => {
  return (
    <Link
      href='/profile'
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
    </Link>
  );
};
