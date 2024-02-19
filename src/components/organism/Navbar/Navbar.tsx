import { Logo } from '@/components/atoms/Logo';
import { SearchBar } from '@/components/molecules/SearchBar/SearchBar';
import { UserSection } from '@/components/molecules/UserSection';
import React, { useEffect } from 'react';
import { categoriesData } from '../Categories/categoriesData';
import { CategoryButton } from '@/components/atoms/CategoryButton';
import { Switch } from '@/components/atoms/ThemeSwitch';
import { Icon360View } from '@tabler/icons-react';
import clsx from 'clsx';
import { useBreakpoints } from '@/hooks/useBreakpoint';

export const Navbar = () => {
  function useDesktop(): boolean {
    const bp = useBreakpoints();
    return bp.lg;
  }
  function useTablet(): boolean {
    const bp = useBreakpoints();
    return bp.md && !bp.lg;
  }
  function useMobile(): boolean {
    const bp = useBreakpoints();
    return !bp.md;
  }

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'p-4 md:px-12 lg:px-16 xl:px-24 w-full gap-2',
        'bg-white dark:bg-extends-darker-blue-950 shadow-xl',
        'absolute top-0'
      )}
    >
      <div className='flex flex-row gap-8 justify-between items-center w-full'>
        <div className='basis-1/4'>
          <Logo />
        </div>
        <div className={clsx('basis-1/2', { hidden: !useDesktop() })}>
          <SearchBar />
        </div>
        <div className='flex flex-row gap-1 md:gap-3 basis-1/4'>
          <UserSection />
          <Switch />
        </div>
      </div>
      <div className={clsx('w-full p-1', { hidden: !useTablet() })}>
        <SearchBar />
      </div>
      <div className='flex flex-row gap-2 justify-between items-center w-full'>
        <div
          className={clsx(
            'flex flex-row justify-start min-w-7 md:justify-center items-center w-full gap-4 md:gap-16',
            'overflow-x-auto'
          )}
        >
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
        <div className={clsx({ hidden: !useMobile() })}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};
