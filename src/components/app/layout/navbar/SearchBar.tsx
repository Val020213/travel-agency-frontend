import clsx from 'clsx';
import { IconSearch } from '@tabler/icons-react';

export const SearchBar = () => {
  return (
    <form
      className={clsx(
        'flex flex-row justify-end items-center',
        'rounded-full h-[45] md:h-max pl-4 gap-2',
        'overflow-visible',
        'border rounded-full border-[#F4373F] md:border-gray-600 dark:border-blue-600',
        'hover:shadow-md focus:shadow-md dark:focus:drop-shadow-blue dark:hover:drop-shadow-blue'
      )}
    >
      {/* <Menu /> */}
      <input
        className={clsx(
          'text-gray-800 dark:text-gray-50',
          'text-base text-left leading-6 w-full font-normal'
        )}
        placeholder='Search in Travelix'
        type='text'
        name='query'
        minLength={1}
      />
      <button>
        <IconSearch
          stroke={2}
          className='rounded-full h-[45px] w-[45px] lg:h-12 lg:w-12 p-3 text-gray-950 dark:text-gray-50'
        />
      </button>
    </form>
  );
};
