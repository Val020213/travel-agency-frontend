import { ReactNode, Suspense } from 'react';
import clsx from 'clsx';
import { Logo, LogoEnterprise } from '@/components/app/layout/navbar/Logo';
import { SearchBar } from '@/components/app/layout/navbar/SearchBar';
import { UserSection } from '@/components/app/layout/navbar/UserSection';
import { Switch } from '@/components/app/layout/navbar/ThemeSwitch';
import { Categories, EnterpriseCategories, AdminCategories, AgentCategories } from './Categories';
import { SearchBarMobile } from './SearchBarMobile';

export function NavbarContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'p-4 pb-2 md:px-12 lg:px-16 xl:px-24 w-full md:pb-4 md:gap-2 lg:gap-1',
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

export async function Navbar() {
  return (
    <NavbarContainer>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-row items-center justify-start gap-8'>
          <Logo />
          <div
            className={clsx(
              'hidden lg:flex sm:flex-row justify-start items-center pl-8',
              'border-l-2 py-2 border-gray-300 dark:border-extends-darker-blue-300',
              '*:gap-2'
            )}
          >
            <Categories />
          </div>
        </div>
        <div className='flex flex-row justify-end gap-1 md:gap-3'>
          <Suspense>
            <UserSection />
          </Suspense>
          <Switch />
        </div>
      </div>
        <Categories className={'lg:hidden'} />
    </NavbarContainer>
  );
};


export async function AdministrativeNavbarConstructor({ categoriesComponent }: { categoriesComponent: ReactNode }) {
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
            {categoriesComponent}
          </div>
        </div>
        <div className='flex flex-row justify-end gap-1 md:gap-3'>
          <Suspense>
            <UserSection />
          </Suspense>
          <Switch />
        </div>
      </div>
      <div className='overflow-x-auto sm:hidden'>
        {categoriesComponent}
      </div>
    </NavbarContainer>
  )
}

export async function AgentNavbar() {
  return <AdministrativeNavbarConstructor categoriesComponent={<AgentCategories />} />;
}

export async function EnterpriseNavbar() {
  return <AdministrativeNavbarConstructor categoriesComponent={<EnterpriseCategories />} />;
};

export async function AdminNavbar() {
  return (
    <NavbarContainer>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-row items-center justify-start gap-8'>
          <LogoEnterprise />
        </div>
        <div className='flex flex-row justify-end gap-1 md:gap-3'>
          <Suspense>
            <UserSection />
          </Suspense>
          <Switch />
        </div>
      </div>
        <AdminCategories />
    </NavbarContainer>
  );
}