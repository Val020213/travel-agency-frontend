import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';

export const Tooltip = (Component: React.FC<any>) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={clsx(
                'flex flex-col md:w-80',
                'text-base text-wrap',
                'rounded-2xl shadow-xl'
            )}
        >
            {show && <Component />}
        </div>
    );
};
