import { useState } from 'react';
import { set } from 'zod';
import { Airplane } from './Airplane';
import { AirplaneHover } from './AirplaneHover';
import clsx from 'clsx';

export const ContinueCard = ({ action }: { action: () => void }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={action}
      className={clsx(
        'bg-[#1E62DA] flex flex-col items-center justify-between',
        'hover:drop-shadow-blue rounded-2xl w-max',
        'py-6'
      )}
    >
      <div className='text-gray-50 font-semibold text-3xl'>
        Seguir Explorando
      </div>
      <div className='flex justify-center items-center w-[300px] h-[335px]'>
        {hover ? <AirplaneHover /> : <Airplane />}
      </div>
      <div className='text-gray-50 text-xl font-medium'>Ver más</div>
    </button>
  );
};
