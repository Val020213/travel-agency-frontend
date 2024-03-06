import '@/app/globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/libs/providers';
import { inter } from '@/ui/fonts';
import { Navbar } from '@/ui/layout/Navbar';
import { Footer } from '@/ui/layout/Footer';

export const metadata: Metadata = {
  title: 'Travelix',
  description: 'Travelix - Your travel partner',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div>
            <Navbar />
            <div className='container grid col-span-1 h-screen mx-auto'>
              {children}
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
