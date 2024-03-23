'use client'
import clsx from 'clsx';
import { IconSearch } from '@tabler/icons-react';
import { redirect, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export const SearchBarMobile = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className='md:hidden'>
      {!open ? (
        <button onClick={() => setOpen(!open)}>
          <IconSearch
            stroke={2}
            className={clsx(
              'rounded-full',
              'h-[45px] w-[45px] lg:h-12 lg:w-12',
              'p-3 text-white',
              'bg-orangePinkLeft dark:bg-gradient-to-r dark:from-blue-600 dark:to-blue-600 '
            )}
          />
        </button>
      ) : (
        <form
          action={() => { setOpen(!open) }}
          className={clsx(
            'flex flex-row justify-end items-center',
            'rounded-full h-[45] md:h-max pl-2 gap-2 w-full',
            'bg-white dark:bg-black overflow-visible',
            'border rounded-full border-[#F4373F] md:border-gray-600 dark:border-blue-600',
            'hover:shadow-xl dark:hover://TODO Blue Shadow Hover'
          )}
        >
          <input
            className={clsx(
              'text-gray-800 dark:text-gray-50',
              'text-base text-left leading-6 w-full font-normal'
            )}
            placeholder='Search in Travelix'
            type='text'
            name='query'
          />
          <button>
            <IconSearch
              stroke={2}
              className='rounded-full h-[45px] w-[45px] lg:h-12 lg:w-12 p-3 text-gray-950 dark:text-gray-50'
            />
          </button>
        </form>
      )}
    </div>
  );
};
