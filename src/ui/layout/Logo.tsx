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
      />
      <span className='text-blue-500 font-bold leading-10 text-4xl hidden md:flex'>
        Travelix
      </span>
    </Link>
  );
};
