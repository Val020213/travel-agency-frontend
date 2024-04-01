import { IconVip } from '@tabler/icons-react';
import clsx from 'clsx';
import { UserSection } from '@/components/app/tourist/profile/UserSection';
import { ReservationSection } from '../../../components/app/tourist/profile/ReservationSection';
import { Tag } from '@/components/ui/tokens/Tag';


export default function Page() {
  const isAgencyTourist = true; // TODO: get from user data

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
        {isAgencyTourist && (
          <Tag text='turista de agencia' className='' icon={<IconVip />} />
        )}
      </div>
      <UserSection />
      {/* <ReservationSection /> */}
    </div>
  );
}
