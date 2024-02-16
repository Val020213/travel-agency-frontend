'use client';
import { ThemeProvider } from 'next-themes';
import { Switch } from '@/components/atoms/ThemeSwitch';
import { CategorySection } from '@/components/organism/Categories/Categories';
import clsx from 'clsx';
export default function Home() {
  return (
    <ThemeProvider>
      <main
        className={clsx(
          'flex-1 w-full pt-[170px] sm:pt-[181px] md:pt-[180px] lg:pt-[120px]',
          ' bg-white dark:bg-extends-darker-blue-950',
          'text-gray-800 dark:text-gray-50'
        )}
      >
        <Switch />
        <div className='mx-auto container px-4 md:px-6 lg:px-0 flex flex-col justify-between'>
          <div className='flex flex-col gap-24 w-full'>
            <CategorySection />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
