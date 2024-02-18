import { LoginRegisterButton } from '@/components/atoms/LoginRegister';
import { LogedUserButton } from '@/components/atoms/logedUserButton';

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
    <div>
      <LoginRegisterButton
        title={'Unirse'}
        onClick={() => console.log('Welcome')}
      />
    </div>
  );
};
