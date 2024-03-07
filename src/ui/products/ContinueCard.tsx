import { useState } from 'react';
import { Airplane } from './tokens/Airplane';
import { AirplaneHover } from './tokens/AirplaneHover';
import clsx from 'clsx';

export const ContinueCard = ({ action }: { action: () => void }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={action}
      className={clsx(
        'rounded-lg shadow-sm',
        'flex flex-col items-center justify-between',
        'hover:shadow-md hover:scale-105',
        'transition-transform duration-300 ease-in-out',
        'overflow-clip',
        'bg-[#1E62DA]',
        'hover:drop-shadow-blue',
        'py-2 md:py-4 px-4 md:px-6',
        'relative',
        'min-h-[300px]'
      )}
    >
      <div className='text-gray-50 font-semibold text-3xl text-left'>
        Seguir Explorando
      </div>
      <div className='flex justify-center items-center w-[300px] h-[335px]'>
        {hover ? <AirplaneHover /> : <Airplane />}
      </div>
      <div className='text-gray-50 text-xl font-medium'>Ver más</div>
    </button>
  );
};
