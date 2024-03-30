import { GetLayout } from './layoutRoute';
import { Providers } from './providers';
import { Modals } from './modalsProvider';
import { ReactNode, Suspense } from 'react';
import { cookies } from 'next/headers';
import { ToastSignInAlert } from './navbar/modal/ToastSignInAlert';

export const Layout = ({ children }: { children: ReactNode }) => {
  const mycookies = cookies().getAll();

  return (
    <Providers>
      <Modals>
        <GetLayout>
          <Suspense>
            <ToastSignInAlert />
            {children}
          </Suspense>
        </GetLayout>
      </Modals>
    </Providers>
  );
};
