import { Logo } from '@/components/atoms/Logo';
import { SearchBar } from '@/components/molecules/SearchBar/SearchBar';
import { UserSection } from '@/components/molecules/SearchBar/UserSection';
import { Switch } from '@headlessui/react';
import React from 'react';
import { categoriesData } from '../Categories/categoriesData';
import { CategoryButton } from '@/components/atoms/CategoryButton';

import { Icon360View } from '@tabler/icons-react';

export const Navbar = () => {
  
  return (
    <div className='flex flex-col items-start justify-center p-4 md:px-12 lg:px-16 xl:px-24 w-full gap-1'>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className=''>
          <Logo />
        </div>
        <div className='w-1/2'>
          <SearchBar />
        </div>
        <div className='flex flex-row md:gap-1'>
          <UserSection />
          <Switch />
        </div>
      </div>
      <div className='flex flex-row justify-center items-center w-full gap-4 md:gap-16 overflow-x-auto'>
        {categoriesData.map(
          (
            category,
            index //Fix this
          ) => (
            <button key={index}>
              <CategoryButton
                name={category.shortName}
                isActive={false}
                icon={<Icon360View stroke={1.5} color='currentColor' />}
              />
            </button>
          )
        )}
      </div>
    </div>
  );
};
