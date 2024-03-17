'use client';
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { EnterpriseNavbar, Navbar } from '@/ui/layout/Navbar';
import { Footer } from '@/ui/layout/Footer';
import { ThemeProvider } from 'next-themes';
import { ReactNode, use } from 'react';
import { Hero } from '@/ui/headersComponents/Hero';
import { SignIn } from '@/ui/layout/user/modal/SignIn';
import { SignUp } from '@/ui/layout/user/modal/SignUp';
import clsx from 'clsx';

function Providers({ children }: { children: React.ReactNode }) {
  return (

    <ThemeProvider
      enableSystem={true}
      themes={['light', 'dark']}
      attribute='class'
    >
      {children}
    </ThemeProvider>

  );
}

export const Modals = ({ children }: { children: ReactNode }) => {
  const modalsParams = ['login', 'register'];
  const searchParams = useSearchParams();

  return (
    <>
      {modalsParams.some((param) => searchParams.has(param)) && (
        <div
          className={clsx(
            'z-40 fixed flex flex-col items-center justify-start',
            'backdrop-brightness-75 overflow-auto py-4',
            'w-full h-full'
          )}
        >
          <SignIn />
          <SignUp />
        </div>
      )}
      {children}
    </>
  );
};

export const Layout = ({ children }: { children: ReactNode }) => {
  const currentPath = usePathname();

  return (
    <Providers>
      <Modals>
        {currentPath.startsWith('/dashboard') ? (
          <EnterpriseLayout>{children}</EnterpriseLayout>
        ) : (
          <MainLayout>{children}</MainLayout>
        )}
      </Modals>
    </Providers>
  );
};

function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      <div>
        <Navbar />
        {pathname === '/' && <Hero />}
        <div className='container flex flex-col py-4 sm:py-6 lg:py-16 min-h-dvh mx-auto'>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function EnterpriseLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <EnterpriseNavbar />
      <div className='container flex flex-col py-4 sm:py-6 lg:py-16 min-h-dvh mx-auto'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
