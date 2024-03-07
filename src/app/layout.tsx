import '@/app/globals.css';
import type { Metadata } from 'next';
import { inter } from '@/ui/fonts';
import { Layout } from '@/libs/providers';

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
      <body
        className={`${inter.className} antialiased dark:bg-extends-darker-blue-950`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
