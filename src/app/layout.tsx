import type { Metadata } from 'next';
import { Providers } from './providers';
import { inter } from '../components/fonts';
import './globals.css';
import { Navbar } from '@/components/organism/Navbar/Navbar';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Travelix',
  description: 'Travelix - Your travel partner',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Navbar />
          <main
            className={clsx(
              'flex flex-col w-screen h-screen pt-[170px] sm:pt-[200px] md:pt-[250px] lg:pt-[180px]',
              'bg-white dark:bg-extends-darker-blue-950',
              'text-gray-800 dark:text-gray-50'
            )}
          >
           {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
