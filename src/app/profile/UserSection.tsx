import Image from 'next/image';
import clsx from 'clsx';
import { user } from '@/libs/definitions';

export const UserSection = ({ userData }: { userData: user }) => {
  return (
    <div className='flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8 w-full'>
      <div
        className={clsx(
          'hidden',
          'md:flex justify-center items-center shrink-0'
        )}
      >
        <Image
          src={require('@/ui/assets/profile.png')}
          width={230}
          height={230}
          alt='google'
          className='h-auto w-auto'
        />
      </div>
      <div className='flex md:py-4 flex-col gap-4 md:gap-6 lg:gap-8 w-full'>
        <div className='text-lg md:text-xl font-medium text-gray-800 dark:text-white'>
          Información Personal
        </div>
        <div className='flex flex-col'>
          <label className='text-base text-gray-600 dark:text-extends-darker-blue-200'>
            nombre
          </label>
          <input
            className='md:text-xl border-b border-gray-300  dark:border-gray-400'
            type='text'
            id='name'
            placeholder={userData.name}
            disabled
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-base text-gray-600 dark:text-extends-darker-blue-200'>
            usuario
          </label>
          <input
            className='md:text-xl border-b border-gray-300  dark:border-gray-400'
            type='text'
            id='username'
            placeholder={userData.username}
            disabled
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-base text-gray-600 dark:text-extends-darker-blue-200'>
            nacionalidad
          </label>
          <input
            className='md:text-xl border-b border-gray-300  dark:border-gray-400'
            type='text'
            id='nacionality'
            placeholder={userData.nationality}
            disabled
          />
        </div>
      </div>
      <div className='flex md:py-4 flex-col gap-4 md:gap-6 lg:gap-8 w-full'>
        <div className='text-lg md:text-xl font-medium text-gray-800 dark:text-white'>
          Seguridad de la cuenta
        </div>
        <div className='flex flex-col'>
          <label className='text-base text-gray-600 dark:text-extends-darker-blue-200'>
            correo
          </label>
          <input
            className='md:text-xl border-b border-gray-300  dark:border-gray-400'
            type='text'
            id='email'
            placeholder={userData.email}
            disabled
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-base text-gray-600 dark:text-extends-darker-blue-200'>
            contraseña
          </label>
          <input
            className='md:text-xl border-b border-gray-300  dark:border-gray-400'
            type='password'
            id='password'
            placeholder='********'
            disabled
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-base text-gray-600 dark:text-extends-darker-blue-200'>
            telefono
          </label>
          <input
            className='md:text-xl border-b border-gray-300  dark:border-gray-400'
            type='text'
            id='telefono'
            placeholder={userData.telefono}
            disabled
          />
        </div>
      </div>
    </div>
  );
};
