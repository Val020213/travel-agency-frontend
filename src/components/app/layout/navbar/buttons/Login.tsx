import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

export function Login() {
  return (
    <Link
      href='?login=true'
      className={clsx(
        'text-gray-800 dark:text-gray-50 hover:text-blue-500 dark:hover:text-blue-500 font-medium',
        'leading-7 text-xl text-end'
      )}
    >
      <Image
        src={require('@/assets/wave.png')}
        alt=''
        height={64}
        width={250}
        className='hidden md:block absolute top-5 left-4 z-0 w-auto h-auto'
      />
      <span className='hidden md:block'>Unirse a Travelix</span>
      <span className='md:hidden'>Unirse</span>
    </Link>
  );
}
