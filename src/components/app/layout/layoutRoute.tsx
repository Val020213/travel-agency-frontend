'use client';
import {
  EnterpriseNavbar,
  Navbar,
} from '@/components/app/layout/navbar/Navbar';
import { Footer } from '@/components/app/layout/footer/Footer';
import { Hero } from '@/components/app/layout/hero/Hero';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function GetLayout({ children }: { children: ReactNode }) {
  const currentPath = usePathname();

  return (
    <>
      {currentPath.startsWith('/dashboard') ? (
        <EnterpriseLayout>{children}</EnterpriseLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
}

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
