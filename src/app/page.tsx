'use client';
import { ThemeProvider } from 'next-themes';
import { CategorySection } from '@/components/organism/Categories/Categories';
import clsx from 'clsx';
import { Navbar } from '@/components/organism/Navbar/Navbar';

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main
        className={clsx(
          'flex flex-col w-full pt-[170px] sm:pt-[181px] md:pt-[180px] lg:pt-[120px]',
          ' bg-white dark:bg-extends-darker-blue-950',
          'text-gray-800 dark:text-gray-50'
        )}
      >
        <div className='mx-auto container px-4 md:px-6 lg:px-0 flex flex-col justify-between'>
          <div className='flex flex-col gap-24 w-full'>
            <CategorySection />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
