import Image from 'next/image';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { Login } from './buttons/Login';
import { Loged } from './buttons/Loged';
import { getSession, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Session } from 'next-auth';


export const UserSection = () => {
  const bp = useBreakpoints();

  const [session, setSession] = useState<Session | undefined>(undefined);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session ?? undefined);
    };

    fetchSession();
  }, []);

  return session?.user?.name  ? (
    <div>
      <Loged name={ session.user.name ?? 'Turista'} />
    </div>
  ) : (
    <div className='flex items-center justify-center relative h-16'>
      <Image
        src={require('@/ui/assets/wave.png')}
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
