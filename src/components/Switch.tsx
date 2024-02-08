import React from 'react';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import clsx from 'clsx';

export const MoonSwitch = () => {
  return (
    <button
      className={clsx(
        'flex flex-row justify-start items-center',
        'w-14 h-9',
        'bg-gradient-to-r',
        'from-extends-blue-gray-300',
        'to-black',
        'rounded-full'
      )}
    >
      <IconMoonFilled className='hover:drop-shadow-white' size={30} />
    </button>
  );
};


export const SunSwitch = () => {
  return (
    <button
      className={clsx(
        'flex flex-row justify-start items-center',
        'w-14 h-9',
        'bg-gradient-orange-pink',
        'to-black',
        'rounded-full'
      )}
    >
      <IconSunFilled className='hover:drop-shadow-white' size={30} />
    </button>
  );
};