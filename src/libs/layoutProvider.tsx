'use client';
import { usePathname } from 'next/navigation';
import { EnterpriseNavbar, Navbar } from '@/ui/layout/Navbar';
import { Footer } from '@/ui/layout/Footer';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Hero } from '@/ui/headersComponents/Hero';

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

export const Layout = ({ children }: { children: ReactNode }) => {
  const currentPath = usePathname();
  return (
    <Providers>
      {currentPath.startsWith('/dashboard') ? (
        <EnterpriseLayout>{children}</EnterpriseLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
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
