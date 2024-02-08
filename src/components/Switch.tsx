import React from 'react';
import { IconMoonFilled } from '@tabler/icons-react';
import clsx from 'clsx';

export const MoonSwitch = () => {
  return (
    <button
      className={clsx(
        'flex flex-row justify-start items-center',
        'w-[58px] h-9 px-1 py-0.5',
        ' bg-darkPurple',
        'rounded-full'
      )}
    >
      <IconMoonFilled className='hover:drop-shadow-white' size={30} />
    </button>
  );
};
