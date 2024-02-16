import { useBreakpoints } from '@/hooks/useBreakpoint';
import React from 'react';
import { CategoryMenu } from '../../atoms/CategoriesMenu';
import clsx from 'clsx';
import { IconSearch } from '@tabler/icons-react';
// TODO SCRIPT Search and implement change of text in category selection
export const SearchBar = () => {
  return (
    <div
      className={clsx(
        'flex flex-row justify-end items-center',
        'rounded-full h-max'
      )}
    >
      <CategoryMenu />
      <input
        className={clsx(
          'text-gray-800 bg-transparent border-none decoration-transparent',
          'text-base text-left leading-6 w-full'
        )}
        placeholder='Buscar en Travelix'
        type='text'
      ></input>
      <button
        className={clsx(
          'rounded-full flex items-center justify-center w-12 h-12',
          'bg-orangePinkRight dark:bg-blue-500'
        )}
        onClick={() =>
          console.log('this is a secret mission implement script seacrh')
        }
      >
        <IconSearch className='text-white' stroke={2} />
      </button>
    </div>
  );
};
