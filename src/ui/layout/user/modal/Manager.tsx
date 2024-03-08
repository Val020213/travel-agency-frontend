import { useState } from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import ModalSignUpVariant from './SignUp';

export const Manager = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [openSignIn, setOpenSignIn] = useState<boolean>(open);
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className='fixed inset-0 bg-black opacity-50 z-10'
      />
      {openSignIn ? (
        <SignIn
          open={openSignIn}
          setOpen={setOpenSignIn}
          setOpenMaster={setOpen}
        />
      ) : (
        <SignUp
          open={openSignIn}
          setOpen={setOpenSignIn}
          setOpenMaster={setOpen}
        />
      )}
    </>
  );
};
