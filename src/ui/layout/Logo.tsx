import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href={'/'}
      className='flex items-center justify-start md:flex-row lg:flex-col w-fit h-fit min-w-6'
    >
      <Image
        src={require('@/ui/assets/logo.png')}
        alt='logo of travelix'
        width={100}
        height={30}
        className='w-auto h-auto'
      />
      <span className='text-blue-500 font-bold leading-10 text-4xl hidden md:flex'>
        Travelix
      </span>
    </Link>
  );
};

export const LogoEnterprise = () => {
  return (
    <Link
      href={'/dashboard'}
      className='flex flex-row items-center justify-start min-w-6'
    >
      <Image
        src={require('@/ui/assets/logoEnterprise.png')}
        alt='logo of travelix'
        width={100}
        height={30}
        className='w-auto h-auto'
      />
      <div className='font-bold justify-center hidden md:flex md:flex-col'>
        <p className='text-gray-900 dark:text-gray-50 text-2xl'>Travelix</p>
        <p className='text-orange-500 text-xl italic'>Enterprise</p>
      </div>
    </Link>
  );
};
