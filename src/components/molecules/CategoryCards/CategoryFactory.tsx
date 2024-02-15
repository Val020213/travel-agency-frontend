import clsx from 'clsx';
import React from 'react';
import { IconFactory } from './IconFactory';
import { useBreakpoints } from '@/hooks/useBreakpoint';

export const CategoryFactory = (id: string, categoryData: ICategory, colorClassName: string) => {

    return (
        <div
            key={id}
            style={{}}
            className={clsx(
                'flex flex-col items-start justify-start',
                'w-[266px] h-[204] md:w-full md:h-[296px]',
                'p-6 md:p-9 rounded-3xl md:rounded-[36px]',
                'bg-extends-blue-gray-50 dark:bg-extends-darker-blue-900',
                'cursor-pointer transition-transform transform-gpu hover:scale-105',
            )}>
            <IconFactory icon={categoryData.icon} size={64} className={colorClassName} />
            <span className='md:text-xl leading-7 text-gray-800 dark:text-white'>
                {useBreakpoints().sm ? categoryData.name : categoryData.shortName}
            </span>
            <span className='line-clamp-3 overflow-ellipsis text-extends-darker-blue-300'>
                {categoryData.description}
            </span>
        </div>
    );
};
