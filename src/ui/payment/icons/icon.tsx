import React from 'react';
import { IconPlane, IconTicket, IconCreditCard } from '@tabler/icons-react';
import clsx from 'clsx';

export const PlaneIcon = ({
  isActive = false,
  props,
}: {
  isActive?: boolean;
  props?: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
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
    </div>
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
    <div className='flex flex-col justify-center items-center'>
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
    </div>
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
    <div className='flex flex-col justify-center items-center'>
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
    </div>
  );
};

export const ProgressLine = (isActive = false) => {
  return <p>Sola linea cuchao</p>;
};
