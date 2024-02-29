import React, { useState } from 'react';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
// import { Transition } from '@headlessui/react';

const MoonSwitch = () => {
  return (
    <div
      className={clsx(
        'flex flex-row justify-start items-center',
        'w-[58px] h-9 px-1 py-0.5',
        'bg-darkPurple',
        'rounded-full'
      )}
    >
      <IconMoonFilled
        className='hover:drop-shadow-white text-white'
        size={30}
      />
    </div>
  );
};

const SunSwitch = () => {
  return (
    <div
      className={clsx(
        'flex flex-row justify-end items-center',
        'w-[58px] h-9 px-1 py-0.5',
        'bg-orangePinkLeft',
        'rounded-full'
      )}
    >
      <IconSunFilled className='hover:drop-shadow-white text-white' size={30} />
    </div>
  );
};

// const SwitchTransitionComponent = ({ show, children }: { show: boolean, children: React.ReactNode }) => {
//   return (
//     <Transition
//       show={show}
//       enter='transition-opacity duration-50'
//       enterFrom='opacity-0'
//       enterTo='opacity-100'
//       leave='transition-opacity duration-50'
//       leaveFrom='opacity-100'
//       leaveTo='opacity-0'
//     >
//       {children}
//     </Transition>
//   );
// };

export const Switch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      {theme === 'dark' ? <MoonSwitch /> : <SunSwitch />}
    </button>
  );
};
