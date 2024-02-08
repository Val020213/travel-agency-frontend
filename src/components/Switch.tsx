import React from 'react';
import { IconMoonFilled } from '@tabler/icons-react';
import clsx from 'clsx';

export const MoonSwitch = () => {
  return (
    <button
      className={clsx(
        'flex flex-row justify-start items-center',
        'w-14 h-9 px-0.5',
        'bg-gradient-to-r',
        'from-extends-violet-600',
        'to-black',
        'rounded-full'
      )}
    >
      <IconMoonFilled className='hover:drop-shadow-white' size={30} />
    </button>
  );
};
