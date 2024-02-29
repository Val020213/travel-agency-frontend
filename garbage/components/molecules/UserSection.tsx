import { LoginRegisterButton } from '@/components/atoms/LoginRegister';
import { LogedUserButton } from '@/components/atoms/logedUserButton';
import Image from 'next/image';
import React, { useState } from 'react';
import { LoginPopUp } from './LoginRegisterPopUp/Login';
import { useBreakpoints } from '@/hooks/useBreakpoint';

// TODO AUTH
export const UserSection = () => {
  const userState: boolean = false;
  const [popUpOpen, setPopUpOpen] = useState<boolean>(false);
  const bp = useBreakpoints();

  return userState ? (
    <div>
      {
        <LogedUserButton
          name={localStorage.getItem('username') ?? 'Error localstorage'}
          onClick={() => {
            console.log('hello world');
          }}
        />
      }
    </div>
  ) : (
    <div className='flex items-center justify-center relative h-16'>
      <Image
        src={require('@/assets/wave.png')}
        alt=''
        height={64}
        width={250}
        className='hidden md:block absolute top-5 left-4 z-0'
      />
      <span className='z-10'>
        <LoginRegisterButton
          title={!bp.md ? 'Unirse' : 'Unirse a Travelix'}
          onClick={() => setPopUpOpen(!popUpOpen)}
        />
      </span>
      {popUpOpen && <LoginPopUp open={popUpOpen} setOpen={setPopUpOpen} />}
    </div>
  );
};
