import clsx from 'clsx';
import { UserSection } from '@/components/app/tourist/profile/UserSection';
import { ReservationSection } from '../../../components/app/tourist/profile/ReservationSection';
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
      <UserSection />
      <ReservationSection />
    </div>
  );
}
