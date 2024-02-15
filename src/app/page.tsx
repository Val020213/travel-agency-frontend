'use client';
import { ThemeProvider } from 'next-themes';
import { Switch } from '@/components/atoms/ThemeSwitch';
import { CategorySection } from '@/components/organism/Categories/Categories';
import { useEffect } from 'react';
import { LandingEnterpriseDevelopers } from '@/components/molecules/EnterpriseDevelopersCards/landing-enterprise-developers';

export default function Home() {
  return (
    <ThemeProvider>
      <div className='flex flex-col gap-24 w-full'>
        <Switch />
        <span className='text-blue-500 dark:text-red-500'>Hello World</span>
        <CategorySection />
        <LandingEnterpriseDevelopers />
      </div>
    </ThemeProvider>
  );
}
