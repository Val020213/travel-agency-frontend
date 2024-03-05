'use client';
import { IconVip } from '@tabler/icons-react';
import clsx from 'clsx';
// import { user } from '@/libs/definitions';
import { UserSection } from '@/app/profile/UserSection';
import { ReservationSection } from './ReservationSection';

export default function Page() {
  const isAgencyTourist = true; // TODO: get from user data
  const userData = {
    name: 'John Doe',
    username: 'johndoe',
    nationality: 'Peruano',
    email: 'sin proporcionar',
    password: '*********',
    telefono: 'sin proporcionar',
  };

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
          <div
            className={clsx(
              'flex flex-row w-fit items-center justify-center',
              'bg-orangePinkRight gap-0 md:gap-2',
              'text-white',
              'px-4 py-2',
              'rounded-full',
              'text-base leading-6'
            )}
          >
            Turista de Agencia
            <IconVip />
          </div>
        )}
      </div>
      <UserSection userData={userData} />
      <ReservationSection />
    </div>
  );
}
