import Image from 'next/image';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { Login } from './buttons/Login';
import { Loged } from './buttons/Loged';
import { Read } from '@/lib/utils/read';

export const UserSection = () => {
  const bp = useBreakpoints();
  const userData = Read()

  return userData.username ? (
    <div>
      <Loged name={userData.username ?? 'Turista'} />
    </div>
  ) : (
    <div className='flex items-center justify-center relative h-16'>
      <Image
        src={require('@/assets/wave.png')}
        alt=''
        height={64}
        width={250}
        className='hidden md:block absolute top-5 left-4 z-0 w-auto h-auto'
      />
      <span className='z-10'>
        <Login title={!bp.md ? 'Unirse' : 'Unirse a Travelix'} />
      </span>
    </div>
  );
};
