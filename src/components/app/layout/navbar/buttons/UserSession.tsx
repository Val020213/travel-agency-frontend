'use server';
import { IconUserCircle } from '@tabler/icons-react';
import { ReadSession } from '@/lib/utils/read';
import clsx from 'clsx';

export async function UserSession() {
  const session = await ReadSession();
  const name = JSON.parse(session).username;
  return (
    <div
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
    </div>
  );
}
