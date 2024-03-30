import { GetLayout } from './layoutRoute';
import { Providers } from './providers';
import { Modals } from './modalsProvider';
import { ReactNode, Suspense } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <Providers>
      <Modals>
        <GetLayout>
          <Suspense>
            {/* <ToastSignInAlert /> */}
            {children}
          </Suspense>
        </GetLayout>
      </Modals>
    </Providers>
  );
};
