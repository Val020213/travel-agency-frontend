'use client';
import { Logo } from '@/ui/layout/Logo';
import { SearchBar } from '@/ui/layout/SearchBar';
import { UserSection } from '@/ui/layout/user/UserSection';
import React, { useEffect } from 'react';
import { Switch } from '@/ui/layout/ThemeSwitch';
import clsx from 'clsx';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { Categories } from './Categories';
import { SearchBarMobile } from './SearchBarMobile';

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
      <div className='flex flex-row md:gap-8 justify-between items-center w-full'>
        <div className='lg:basis-1/4'>
          <Logo />
        </div>
        <div className={clsx('basis-1/2', { hidden: !useDesktop() })}>
          <SearchBar />
        </div>
        <div className='flex flex-row justify-end gap-1 md:gap-3 lg:basis-1/4'>
          <UserSection />
          <Switch />
        </div>
      </div>
      <div className={clsx('w-full p-1', { hidden: !useTablet() })}>
        <SearchBar />
      </div>
      <div className='flex flex-row gap-1 justify-between items-center w-full'>
        <Categories />
        {useMobile() && <SearchBarMobile />}
      </div>
    </div>
  );
};
