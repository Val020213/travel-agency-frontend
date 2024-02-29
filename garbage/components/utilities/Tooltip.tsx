import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useState } from 'react';

export const Tooltip = ({
  children,
  message,
}: {
  children: React.ReactNode;
  message: ReactNode;
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <div
        className='relative'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
        <div
          className={clsx(
            'absolute bottom-0 left-0 max-w-72 p-2 bg-black text-white text-center rounded-md text-wrap z-10',
            'shadow-lg bg-extends-blue-gray-50 dark:bg-extends-darker-blue-900',
            show ? 'flex flex-col' : 'hidden'
          )}
        >
          {message}
        </div>
      </div>
    </div>
  );
};
