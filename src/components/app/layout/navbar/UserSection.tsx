'use client'
import { FetchUser } from '@/lib/data/data';
import { Loged } from './buttons/Loged';
import { Login } from './buttons/Login';
import { useEffect, useState } from 'react';
import { user } from '../../../../lib/entities';

export function UserSection() {

  const [user, setUser] = useState<user | undefined>(undefined);

  useEffect(() => {
    FetchUser().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <>
      {
        user ? (
          <Loged name={user.username} />
        ) : (
          <div className='flex items-center justify-center relative h-16'>
            <Login />
          </div >
        )
      }
    </>
  );
}
