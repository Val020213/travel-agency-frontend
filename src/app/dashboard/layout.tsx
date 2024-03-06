import type { Metadata } from 'next';
import { Providers } from '@/libs/providers';
import { inter } from '@/ui/fonts';
import { Navbar } from '@/ui/layout/Navbar';
import { Footer } from '@/ui/layout/Footer';

export const metadata: Metadata = {
  title: 'Travelix',
  description: 'Travelix - Your travel partner',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} antialiased`}>
      <Providers>
        <div>
          <Navbar />

          <div className='flex flex-col h-screen mt-[160px] md:mt-[220px] lg:mt-[200px] mx-4 lg:mx-24'>
            {children}
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
        </div>
        <Footer />
      </Providers>
    </div>
  );
}
