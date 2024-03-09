'use client';
import { usePathname } from 'next/navigation';
import { EnterpriseNavbar, Navbar } from '@/ui/layout/Navbar';
import { Footer } from '@/ui/layout/Footer';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Hero } from '@/ui/headersComponents/Hero';
import { SignIn } from '@/ui/layout/user/modal/SignIn';
import { SignUp } from '@/ui/layout/user/modal/SignUp';

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
  return (
    <>
      <div className='z-40 fixed inset-0 min-h-screen w-screen backdrop-brightness-75 overflow-auto pt-4'>
        <SignIn />
        <SignUp />
      </div>
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
