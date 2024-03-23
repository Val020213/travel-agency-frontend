'use client'
import { useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { EnterpriseNavbar, Navbar } from '@/components/app/layout/navbar/Navbar';
import { Footer } from '@/components/app/layout/footer/Footer';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Hero } from '@/components/app/layout/hero/Hero';
import { SignIn } from '@/components/app/layout/navbar/modal/SignIn';
import { SignUp } from '@/components/app/layout/navbar/modal/SignUp';
import clsx from 'clsx';
import Link from 'next/link';


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
            'overflow-auto py-4',
            'w-full h-full'
          )}
        >
          <Link href={'?'} className='fixed top-0 w-screen h-screen backdrop-brightness-75'></Link>
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
