import React from 'react';
import { IconPlane, IconTicket, IconCreditCard } from '@tabler/icons-react';
import clsx from 'clsx';

export const PlaneIcon = ({
  isActive,
  props,
}: {
  isActive: boolean;
  props: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <IconPlane
        {...props}
        stroke={1.5}
        className={clsx(
          'h-16 w-16 rounded-xl text-white',
          {
            'bg-gray-400 dark:bg-extends-darker-blue-900': !isActive,
          },
          {
            'bg-orangePinkRigth': isActive,
          }
        )}
      />
    </div>
  );
};

export const TicketIcon = ({
  isActive,
  props,
}: {
  isActive: boolean;
  props: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <IconTicket
        {...props}
        stroke={1.5}
        className={clsx(
          'h-16 w-16 rounded-xl text-white',
          {
            'bg-gray-400 dark:bg-extends-darker-blue-900': !isActive,
          },
          {
            'bg-orangePinkRigth': isActive,
          }
        )}
      />
    </div>
  );
};

export const CreditCardIcon = ({
  isActive,
  props,
}: {
  isActive: boolean;
  props: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <IconCreditCard
        {...props}
        stroke={1.5}
        className={clsx(
          'h-16 w-16 rounded-xl text-white',
          {
            'bg-gray-400 dark:bg-extends-darker-blue-900': !isActive,
          },
          {
            'bg-orangePinkRigth': isActive,
          }
        )}
      />
    </div>
  );
};
