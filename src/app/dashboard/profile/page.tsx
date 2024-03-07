'use client';
import clsx from 'clsx';

export default function Page() {
  return (
    <div className={clsx('flex flex-col items-center justify-center h-full')}>
      <h1 className={clsx('text-4xl font-bold')}>Profile</h1>
      <p className={clsx('text-lg mt-4')}>This is your profile agency page</p>
    </div>
  );
}
