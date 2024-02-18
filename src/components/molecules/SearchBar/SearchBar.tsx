import { useBreakpoints } from '@/hooks/useBreakpoint';
import React, { useRef } from 'react';
import { CategoryMenu } from '../../atoms/CategoriesMenu';
import clsx from 'clsx';
import { IconSearch } from '@tabler/icons-react';
import { Search } from '@/scripts/search';
// TODO SCRIPT Search and implement change of text in category selection
export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function searchQuery() {
    inputRef.current?.value && Search(inputRef.current?.value);
  }

  return (
    <div
      className={clsx(
        'flex flex-row justify-end items-center',
        'rounded-full h-max',
        'border rounded-full border-gray-600 dark:border-blue-600'
      )}
    >
      <CategoryMenu />
      <input
        className={clsx(
          'text-gray-800 bg-transparent border-none decoration-transparent',
          'text-base text-left leading-6 w-full outline-none font-medium'
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
          className='rounded-full h-12 w-12 p-3 text-gray-950 dark:text-gray-50'
        />
      </button>
    </div>
  );
};
