'use client';
import React, { ReactNode, useEffect } from 'react';
import clsx from 'clsx';
import { Logo, LogoEnterprise } from '@/ui/layout/Logo';
import { SearchBar } from '@/ui/layout/SearchBar';
import { UserSection } from '@/ui/layout/user/UserSection';
import { Switch } from '@/ui/layout/ThemeSwitch';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { Categories, EnterpriseCategories } from './Categories';
import { SearchBarMobile } from './SearchBarMobile';
import { Loged } from './user/buttons/Loged';
import { redirect, usePathname } from 'next/navigation';
import Link from 'next/link';

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

const NavbarContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'p-4 pb-2 md:px-12 lg:px-16 xl:px-24 w-full gap-2',
        'bg-white dark:bg-extends-darker-blue-900',
        'bg-opacity-80 bg-blend-color-burn dark:bg-opacity-100 shadow-lg',
        'backdrop-filter backdrop-blur-xl dark:backdrop-blur-lg',
        'sticky z-10 top-0'
      )}
    >
      {children}
    </div>
  );
};

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div className='flex flex-row justify-between items-center w-full'>
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
      <div className='flex flex-row gap-2 justify-between items-center w-full *:md:gap-16'>
        <Categories />
        {useMobile() && <SearchBarMobile />}
      </div>
    </NavbarContainer>
  );
};

export const EnterpriseNavbar = () => {
  const pathname = usePathname();
  return (
    <NavbarContainer>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-row items-center justify-start gap-8'>
          <LogoEnterprise />
          <div
            className={clsx(
              'hidden sm:flex sm:flex-row justify-start items-center pl-8',
              'border-l-2 py-2 border-gray-300 dark:border-extends-darker-blue-300',
              '*:gap-2'
            )}
          >
            <EnterpriseCategories />
          </div>
        </div>
        <div className='flex flex-row justify-end gap-1 md:gap-3'>
          <Link href='/dashboard/profile'>
            <Loged name='Testing' onClick={() => {}} />
          </Link>
          <Switch />
        </div>
      </div>
      <div className='sm:hidden'>
        <EnterpriseCategories />
      </div>
    </NavbarContainer>
  );
};
