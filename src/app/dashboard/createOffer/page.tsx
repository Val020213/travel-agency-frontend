'use client';
import clsx from 'clsx';

export default function Page() {
  return (
    <div className={clsx('flex flex-col items-center justify-center h-full')}>
      <h1 className={clsx('text-4xl font-bold')}>CreateOffer</h1>
      <p className={clsx('text-lg mt-4')}>CreateOffer Server </p>
    </div>
  );
}
