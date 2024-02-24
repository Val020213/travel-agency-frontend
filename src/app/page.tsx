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
          'flex flex-col w-screen h-screen pt-[170px] sm:pt-[200px] md:pt-[250px] lg:pt-[180px]',
          'bg-white dark:bg-extends-darker-blue-950',
          'text-gray-800 dark:text-gray-50'
        )}
      >
        <div className='w-full lg:mx-auto px-4 md:px-6 flex flex-col justify-between'>
          <div className='flex flex-col gap-24 w-full'>
            <CategorySection />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
