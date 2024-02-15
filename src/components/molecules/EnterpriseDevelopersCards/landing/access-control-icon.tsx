import clsx from 'clsx';
import * as React from 'react';
import { SVGProps } from 'react';
import styles from './iconStyles.module.css';
import { IconApiApp } from '@tabler/icons-react';

export const AccessControlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={64}
    height={64}
    viewBox='0 0 64 64'
    fill='none'
    {...props}
    className={clsx(props.className, styles.accessControlIcon)}
  >
    <rect
      width={64}
      height={64}
      fill='url(#access-control-a)'
      fillOpacity={0.4}
      rx={16}
    />
    <rect
      width={63}
      height={63}
      x={0.5}
      y={0.5}
      stroke='url(#access-control-b)'
      strokeOpacity={0.5}
      rx={15.5}
    />
    <IconApiApp
      color='currentColor'
      className='text-current flex justify-center items-center w-16 h-16'
      size={48}
    />
    <defs>
      <radialGradient
        id='access-control-a'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(45) scale(90.5097)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentColor' />
        <stop offset={1} stopColor='currentColor' stopOpacity={0.25} />
      </radialGradient>
      <radialGradient
        id='access-control-b'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='rotate(45) scale(90.5097)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='currentColor' />
        <stop offset={0.5} stopColor='currentColor' stopOpacity={0} />
        <stop offset={1} stopColor='currentColor' stopOpacity={0.25} />
      </radialGradient>
    </defs>
  </svg>
);
