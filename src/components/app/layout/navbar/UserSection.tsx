import { FetchUser } from '@/lib/data/data';
import { Loged } from './buttons/Loged';
import { Login } from './buttons/Login';
import { useState, useEffect } from 'react';
import { user } from '@/lib/entities';

export async function UserSection() {
  const [user, setUser] = useState<user | undefined>()
  useEffect(() => {
    const fetchData = async () => {
      const user = await FetchUser();
      if (user) {
        setUser(user)
      }
    };

    fetchData();
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
