import '@/app/globals.css';
import type { Metadata } from 'next';
import { inter } from '@/components/ui/fonts';
import { Layout } from '@/lib/layoutProvider';
export const metadata: Metadata = {
  title: 'Travelix',
  description: 'Travelix - Your travel partner',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body
        className={`${inter.className} antialiased dark:bg-extends-darker-blue-950`}
        >
        <div
          id='modal-root'
          className='flex flex-col overflow-auto fixed top-0'
          ></div>     
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
