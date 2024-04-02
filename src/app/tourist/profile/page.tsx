import clsx from 'clsx';
import { UserSection } from '@/components/app/tourist/profile/UserSection';
import { ReservationSection } from '../../../components/app/tourist/profile/ReservationSection';
import { TouristTypeSection } from '@/components/app/tourist/profile/TouristTypeSection';
import { Suspense } from 'react';
export default function Page() {

  return (
    <div className='flex flex-col gap-4 md:gap-16 w-full'>
      <div
        className={clsx(
          'flex flex-col sm:flex-row',
          'gap-4',
          'text-3xl md:text-4xl font-medium',
          'text-gray-900 dark:text-white'
        )}
      >
        Cuenta de usuario
      </div>
      <Suspense>
        <UserSection />
        <TouristTypeSection />
        <ReservationSection />
      </Suspense>
    </div>
  );
}
