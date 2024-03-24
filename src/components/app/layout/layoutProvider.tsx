import { GetLayout } from './layoutRoute';
import { Providers } from './providers';
import { Modals } from './modalsProvider';
import { ReactNode } from 'react';
import { cookies } from 'next/headers';

export const Layout = ({ children }: { children: ReactNode }) => {
  const mycookies = cookies().getAll();

  return (
    <>
      <Providers>
        <Modals>
          <GetLayout>{children}</GetLayout>
        </Modals>
      </Providers>
    </>
  );
};
