import Image from 'next/image';
import clsx from 'clsx';
import { FetchUser, GetTouristByID } from '@/lib/data/data';

export async function UserSection(){
  const user = await FetchUser();
  if(!user){
    return
  }
  
  const tourist = await GetTouristByID(user?.id);
  
  
  return (
    <div className='flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8 w-full'>
      <div
        className={clsx(
          'hidden',
          'md:flex justify-center items-center shrink-0'
        )}
      >
        <Image
          src={require('@/assets/profile.png')}
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
            placeholder={tourist?.name}
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
            placeholder={tourist?.username}
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
            placeholder={tourist?.nationality}
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
            placeholder={tourist?.email}
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
            placeholder={tourist?.phone}
            disabled
          />
        </div>
      </div>
    </div>
  );
};
