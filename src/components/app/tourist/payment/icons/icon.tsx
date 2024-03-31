import React from 'react';
import { IconPlane, IconTicket, IconCreditCard } from '@tabler/icons-react';
import clsx from 'clsx';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const PlaneIcon = ({
  isActive = false,
  props,
}: {
  isActive?: boolean;
  props?: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <Link href={isActive? '?step=1' : ''} className={clsx('flex flex-col justify-center items-center', {'cursor-pointer' : isActive})} >
      <IconPlane
        {...props}
        size={24}
        stroke={1.5}
        className={clsx(
          'h-16 w-16 p-3.5 rounded-xl text-white',
          {
            'bg-gray-400 dark:bg-extends-darker-blue-900': !isActive,
          },
          {
            'bg-orangePinkRight': isActive,
          }
        )}
      />
    </Link>
  );
};

export const TicketIcon = ({
  isActive = false,
  props,
}: {
  isActive?: boolean;
  props?: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <Link href={isActive? '?step=2' : ''} className={clsx('flex flex-col justify-center items-center', {'cursor-pointer' : isActive})} >
      <IconTicket
        {...props}
        size={24}
        stroke={1.5}
        className={clsx(
          'h-16 w-16 p-3.5 rounded-xl text-white',
          {
            'bg-gray-400 dark:bg-extends-darker-blue-900': !isActive,
          },
          {
            'bg-orangePinkRight': isActive,
          }
        )}
      />
    </Link>
  );
};

export const CreditCardIcon = ({
  isActive = false,
  props,
}: {
  isActive?: boolean;
  props?: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <Link href={isActive? '?step=3' : ''} className={clsx('flex flex-col justify-center items-center', {'cursor-pointer' : isActive})} >
      <IconCreditCard
        {...props}
        size={24}
        stroke={1.5}
        className={clsx(
          'h-16 w-16 p-3.5 rounded-xl text-white',
          {
            'bg-gray-400 dark:bg-extends-darker-blue-900': !isActive,
          },
          {
            'bg-orangePinkRight': isActive,
          }
        )}
      />
    </Link>
  );
};

export const ProgressLine = (isActive = false) => {
  return <p>Sola linea cuchao</p>;
};
