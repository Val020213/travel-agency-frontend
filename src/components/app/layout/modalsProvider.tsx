'use client';
import { Suspense, ReactNode } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SignIn } from '@/components/app/layout/navbar/modal/SignIn';
import { SignUp } from '@/components/app/layout/navbar/modal/SignUp';

export const Modals = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Suspense>
        <ModalsTrigger>
          <SignIn />
          <SignUp />
        </ModalsTrigger>
      </Suspense>
      {children}
    </>
  );
};

const ModalsTrigger = (props: any) => {
  const modalsParams = ['login', 'register'];
  const searchParams = useSearchParams();

  return (
    modalsParams.some((param) => searchParams.has(param)) && (
      <div
        className={clsx(
          'z-40 fixed flex flex-col items-center justify-start',
          'overflow-auto py-4',
          'w-full h-full'
        )}
      >
        <Link
          href={'?'}
          className='fixed top-0 w-screen h-screen backdrop-brightness-75'
        ></Link>
        {props.children}
      </div>
    )
  );
};
