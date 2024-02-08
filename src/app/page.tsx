'use client';
import { useFetch } from '../hooks/useFetch';
import clsx from 'clsx';
import { MoonSwitch, SunSwitch } from '@/components/Switch';
const UseFetchComponent = (url: string) => {
  const { data, error, loading } = useFetch(url);
  return (
    <div
      className={clsx(
        'flex flex-col md:flex-row w-full h-full',
        'justify-center items-center',
        'gap-4',
        'p-72',
        'dark:bg-extends-blue-gray-200'
      )}
    >
      <MoonSwitch />
      <SunSwitch />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div>
        {UseFetchComponent('https://jsonplaceholder.typicode.com/posts')}
      </div>
    </>
  );
}
