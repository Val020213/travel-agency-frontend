'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import { Login } from './buttons/Login';
import { Loged } from './buttons/Loged';
import { Manager } from './modal/Manager';

export const UserSection = () => {
  const userState: boolean = false;
  const [popUpOpen, setPopUpOpen] = useState<boolean>(false);
  const bp = useBreakpoints();

  return userState ? (
    <div>
      {
        <Loged
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
        src={require('@/ui/assets/wave.png')}
        alt=''
        height={64}
        width={250}
        className='hidden md:block absolute top-5 left-4 z-0'
      />
      <span className='z-10'>
        <Login
          title={!bp.md ? 'Unirse' : 'Unirse a Travelix'}
          onClick={() => setPopUpOpen(!popUpOpen)}
        />
      </span>
      {popUpOpen && <Manager open={popUpOpen} setOpen={setPopUpOpen} />}
    </div>
  );
};
