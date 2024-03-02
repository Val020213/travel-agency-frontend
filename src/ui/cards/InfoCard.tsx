import clsx from 'clsx';
import { IconMapPin, IconBrandWhatsapp } from '@tabler/icons-react';
export const InfoCard = ({
  name,
  address,
  phone,
}: {
  name: string;
  address: string;
  phone: string;
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col',
        'justify-start',
        'items-center',
        'rounded-3xl md:rounded-[36px]',
        'shadow-xl',
        'bg-white dark:bg-extends-darker-blue-900',
        'gap-1 p-6 pb-8 md:gap-9 md:p-9 md:pb-12',
        'w-[300px] md:w-[700px]'
      )}
    >
      <h1
        className={clsx(
          'w-full',
          'text-xl text-center md:text-4xl font-medium',
          'text-gray-900 dark:text-white'
        )}
      >
        {name}
      </h1>
      <div
        className={clsx(
          'flex w-full flex-col',
          'md:gap-4 *:flex *:flex-row *:gap-2',
          'text-gray-500 dark:text-extends-darker-blue-200 text-base md:text-lg'
        )}
      >
        <div>
          <IconMapPin size={24} stroke={1.5} className='h-6 w-6' />
          <div
            className={clsx(
              'w-full',
              'line-clamp-1 hover:line-clamp-none sm:line-clamp-none',
              'hover:text-gray-600 hover:dark:text-extends-blue-gray-100',
              'sm:hover:text-current sm:hover:dark:text-current'
            )}
          >
            {address}
          </div>
        </div>
        <div>
          <IconBrandWhatsapp size={24} stroke={1.5} className='h-6 w-6' />
          <div className='w-full'>{phone}</div>
        </div>
      </div>
    </div>
  );
};
