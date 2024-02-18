import { LoginRegisterButton } from '@/components/atoms/LoginRegister';
import { LogedUserButton } from '@/components/atoms/logedUserButton';
import Image from 'next/image';

// TODO AUTH
export const UserSection = () => {
  const userState: boolean = false;

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
        className='absolute top-5 left-4 z-0'
      />
      <span className='z-10'>
      <LoginRegisterButton
        title={'Unirse a Travelix'}
        onClick={() => console.log('Welcome')}
      />
      </span>
    </div>
  );
};
