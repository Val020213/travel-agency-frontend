import clsx from 'clsx';
import { IconUserCircle } from '@tabler/icons-react';

export const Loged = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={() => onClick()}
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
  );
};
