'use client';
import {
  AdminNavbar,
  AgentNavbar,
  EnterpriseNavbar,
  Navbar,
} from '@/components/app/layout/navbar/Navbar';
import {  Footer } from '@/components/app/layout/footer/Footer';
import { Hero } from '@/components/app/layout/hero/Hero';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export async function GetLayout({ children }: { children: ReactNode }) {
  const currentPath = usePathname();

  function Resolve({ children }: { children: ReactNode }) {
    if (currentPath.startsWith('/admin')) {
      return <AdministrativeLayout>{children}</AdministrativeLayout>;
    } else if (currentPath.startsWith('/marketing')) {
      return <EnterpriseLayout>{children}</EnterpriseLayout>;
    } else if (currentPath.startsWith('/agent')) {
      return <AgentLayout>{children}</AgentLayout>;
    }
    else {
      return <MainLayout>{children}</MainLayout>;
    }
  }
  return <Resolve>{children}</Resolve>;
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

function AgentLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AgentNavbar />
      <div className='container flex flex-col py-4 sm:py-6 lg:py-16 min-h-dvh mx-auto'>
        {children}
      </div>
      <Footer />
    </div>
  );

}

function AdministrativeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AdminNavbar />
      <div className='container flex flex-col py-4 sm:py-6 lg:py-16 min-h-dvh mx-auto'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
