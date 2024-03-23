'use client'
import { Loged } from './buttons/Loged';
import { ReadSession } from '@/lib/utils/read';
import { Login } from './buttons/Login';
import { Suspense } from 'react';

export async function UserSection() {

  const session = await ReadSession();
  return (
    <Suspense>
      {session ? < Loged /> :
        <div className='flex items-center justify-center relative h-16'>
          <Login />
        </div>
      }
    </Suspense >
  )
};
