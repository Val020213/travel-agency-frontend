import React, { useEffect } from 'react';
import { categoriesData } from './categoriesData';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import clsx from 'clsx';

export const CategorySection = () => {
  const [sm, setSm] = React.useState(true);
  const breakpoints = useBreakpoints();
  useEffect(() => {
    setSm(breakpoints.sm);
  }, [breakpoints.sm]);

  return (
    <section className='flex flex-row overflow-x-hidden md:w-full md:*:w-full py-8 gap-12'>
      {categoriesData.map((category, index) => (
        <button
          key={index}
          className={clsx(
            'flex flex-col justify-start items-start p-4 sm:p-8 gap-6 *:text-left *:line-clamp-3',
            'rounded-2xl sm:rounded-3xl',
            'bg-extends-blue-gray-50 dark:bg-extends-darker-blue-900'
          )}
        >
          <div
            className={clsx(
              'w-16 h-16 relative rounded-2xl flex justify-center items-center',
              category.iconClassName
            )}
          >
            {category.icon}
          </div>
          <div className='text-2xl font-semibold'>
            {sm ? category.name : category.shortName}
          </div>
          <div className='text-gray-600 dark:text-gray-400'>
            {category.description}
          </div>
        </button>
      ))}
    </section>
  );
};
