import { useBreakpoints } from '@/hooks/useBreakpoint';
import React, { useEffect, useRef } from 'react';
import { CategoryMenu } from '../../atoms/CategoriesMenu';
import clsx from 'clsx';
import { IconSearch } from '@tabler/icons-react';
import { Search } from '@/scripts/search';
// TODO SCRIPT Search and implement change of text in category selection
export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [open, setOpen] = React.useState<boolean>(true);

  const breakpoints = useBreakpoints();
  const isMd = breakpoints.md;

  useEffect(() => {
    !isMd && setOpen(false);
  }, [isMd]);

  function searchQuery() {
    inputRef.current?.value && Search(inputRef.current?.value);
  }

  return (
    <div
      className={clsx(
        'flex flex-row justify-end items-center',
        'rounded-full h-[45] md:h-max pl-2 gap-2',
        'bg-white dark:bg-black overflow-visible',
        'border rounded-full border-[#F4373F] md:border-gray-600 dark:border-blue-600',
        'hover:shadow-xl dark:hover://TODO Blue Shadow Hover'
      )}
    >
      <div className='hidden md:block'>
        <CategoryMenu />
      </div>
      <input
        className={clsx(
          'text-gray-800 dark:text-gray-50',
          'text-base text-left leading-6 w-full font-normal'
        )}
        ref={inputRef}
        placeholder='Search in Travelix'
        type='text'
        onKeyDown={(e) => {
          e.key === 'Enter' && searchQuery();
        }}
      />
      <button
        onClick={() => {
          const input = document.querySelector('input');
          if (input) {
            const value = input.value;
            value && searchQuery();
          }
        }}
      >
        <IconSearch
          stroke={2}
          className='rounded-full h-[45px] w-[45px] lg:h-12 lg:w-12 p-3 text-gray-950 dark:text-gray-50'
        />
      </button>
    </div>
  );
};
