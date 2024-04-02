'use client';
import { IconChevronDown } from '@tabler/icons-react';
import clsx from 'clsx';
import { ReactNode, useState } from 'react';

export function Menu({
  placeholder,
  children,
  className,
}: {
  placeholder: string;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='block relative w-80 md:max-w-3xl lg:max-w-4xl text-gray-500 dark:text-gray-300'>
      <div onClick={() => setOpen(!open)}>
        <div
          className={clsx(
            'flex',
            'flex-row',
            'items-center',
            'gap-1',
            'text-xl'
          )}
        >
          <span className='hidden sm:block'>{placeholder}</span>
          <IconChevronDown size={24} stroke={1.5} />
        </div>
      </div>
      <div
        className={clsx(
          'absolute',
          'p-4',
          'z-10',
          'pt-4',
          'bg-white',
          'dark:bg-extends-darker-blue-900',
          'shadow-lg',
          'rounded-lg',
          'border',
          'border-gray-200 dark:border-extends-darker-blue-950',
          'p-2',
          'w-auto',
          {
            hidden: !open,
          },
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
