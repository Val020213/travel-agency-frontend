import Image from 'next/image';

export const Logo = () => {
  return (
    <div className='flex items-center justify-start md:flex-row lg:flex-col'>
      <Image
        src={require('@/assets/logo.png')}
        alt=''
        width={100}
        height={30}
      />
      <span className='text-blue-500 font-bold leading-10 text-4xl hidden md:flex'>
        Travelix
      </span>
    </div>
  );
};
