import React from 'react';
import { IconMoonFilled } from '@tabler/icons-react';
import clsx from 'clsx';

const Moon = (size) => {
  <svg
    className='hover:shadow-custom-shadow'
    width={size}
    height={size}
    viewBox='0 0 20 20'
    fill='white'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10.0001 -0.0078125C8.18983 -0.00747984 6.41358 0.484259 4.86085 1.41495C3.30811 2.34564 2.03715 3.68037 1.18352 5.27677C0.329889 6.87317 -0.0743796 8.67134 0.0138352 10.4795C0.10205 12.2876 0.679439 14.0379 1.68441 15.5436C2.68939 17.0493 4.08424 18.254 5.7202 19.0291C7.35615 19.8043 9.17183 20.1208 10.9736 19.9449C12.7753 19.769 14.4955 19.1073 15.9506 18.0304C17.4058 16.9535 18.5413 15.5018 19.2361 13.8302C19.5771 13.0102 18.7601 12.1862 17.9381 12.5202C16.5293 13.0909 14.965 13.1498 13.5173 12.6866C12.0695 12.2235 10.8299 11.2676 10.0139 9.98521C9.19784 8.7028 8.85705 7.17497 9.05076 5.66734C9.24447 4.15972 9.96041 2.76765 11.0741 1.73319L11.1511 1.65319C11.7021 1.02319 11.2641 0.000187516 10.3931 0.000187516H10.1271L10.0591 -0.00581253L9.99912 -0.0078125H10.0001Z'
      fill='white'
    />
  </svg>;
};

export const MoonSwitch = () => {
  return (
    <button
      className={clsx(
        'flex flex-row justify-start items-center',
        'w-14 h-9',
        'bg-gradient-to-r',
        'from-extends-purpleG',
        'to-black',
        'rounded-full'
      )}
    >
      <Moon size={30} />
    </button>
  );
};
