import React, { use } from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { categories } from '@/libs/data';
import { IconChevronDown } from '@tabler/icons-react';

const Separator = () => {
  return (
    <svg
      width='2'
      height='15'
      viewBox='0 0 2 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='currentColor'
    >
      <path d='M1 1.25V13.75' stroke='currentColor' strokeLinecap='round' />
    </svg>
  );
};

export const Menu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const [indexCategory, setIndexCategory] = useState<number>(
    categories.findIndex((category) => category.href === pathname) ?? 0
  );

  useEffect(() => {
    setIndexCategory(
      categories.findIndex((category) => category.href === pathname) ?? 0
    );
  }, [pathname]);

  return (
    <nav
      className={clsx(
        'flex flex-col justify-start items-center w-28 relative',
        'font-medium text-base leading-6',
        'text-gray-500 dark:text-gray-50'
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className='flex flex-row justify-end items-center w-full md:gap-1 cursor'>
        {categories[indexCategory]?.name}
        <IconChevronDown className='block' size={24} />
        <span className='text-gray-500 dark:text-gray-300'>
          <Separator />
        </span>
      </div>
      <div
        className={clsx(
          'flex flex-col justify-start items-start',
          'absolute w-full min-w-max mt-6 py-1 *:px-1 z-10 gap-2 bg-white dark:bg-extends-darker-blue-900',
          'rounded-xl shadow-lg',
          { hidden: !open }
        )}
      >
        {categories.map(
          (category, index) =>
            category.href != categories[indexCategory]?.href && (
              <Link
                key={index}
                href={category.href}
                className='hover:text-orange-500 dark:hover:text-blue-500 w-full flex'
              >
                {category.name}
              </Link>
            )
        )}
      </div>
    </nav>
  );
};
