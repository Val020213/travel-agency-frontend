import type { Metadata } from 'next';
import { Providers } from './providers';
import { inter } from '@/ui/fonts'
import { Navbar } from '@/ui/layout/Navbar'
import './globals.css'

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
          <div className='flex flex-col mt-[160px] md:mt-[200px] lg:mt-[150px] mx-4 lg:mx-48'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
