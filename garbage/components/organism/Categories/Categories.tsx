import React, { useEffect, useState } from 'react';
import { categoriesData } from './categoriesData';
import { useBreakpoints } from '@/hooks/useBreakpoint';
import clsx from 'clsx';
import { IconFactory } from './IconFactory';

export const CategorySection = () => {
  const [currentCategory, setCurrentCategory] = useState<number>(1); //TODO
  const [sm, setSm] = React.useState(true);
  const breakpoints = useBreakpoints();
  useEffect(() => {
    setSm(breakpoints.sm);
  }, [breakpoints.sm]);

  return (
    <section
      className={clsx(
        'flex flex-row w-full justify-start items-start lg:justify-center overflow-x-auto',
        'gap-8 md:*:w-full cursor-grab dragscroll'
      )}
    >
      {categoriesData.map(
        (category, index) =>
          index !== currentCategory && (
            <button
              key={index}
              className={clsx(
                'block justify-start items-start p-4 sm:p-8 gap-2 *:text-left *:line-clamp-3',
                'rounded-2xl sm:rounded-3xl',
                'bg-extends-blue-gray-50 dark:bg-extends-darker-blue-900',
                'w-full min-w-64 md:min-w-96 h-60',
                'hover:shadow-2xl' //TODO make shadow colors factory
              )}
            >
              <div
                onClick={() => {
                  console.log(category.iconClassName);
                }}
                className={clsx(
                  'w-16 h-16 relative rounded-2xl',
                  category.iconClassName
                )}
              >
                <IconFactory></IconFactory>
                <span className='absolute left-[14px] top-[14px]'>
                  {category.icon}
                </span>
              </div>
              <div className='text-lg md:text-xl leading-7 font-medium'>
                {sm ? category.name : category.shortName}
              </div>
              <div className='text-gray-600 dark:text-gray-400 text-base leading-6'>
                {category.description}
              </div>
            </button>
          )
      )}
    </section>
  );
};
