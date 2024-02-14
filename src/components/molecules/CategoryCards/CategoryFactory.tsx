import clsx from 'clsx';
import React from 'react';
import { IconFactory } from './IconFactory';

export const CategoryFactory = (id: string, categoryData: ICategory, colorHex: string) => {
    const dropShadowColor = 'drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'
    return (
        <div
            key={id}
            style={{}}
            className={clsx(
                'flex flex-col items-start justify-start',
                'w-[266px] h-[204] md:w-[392px] md:h-[296px]',
                'p-6 md:p-9 rounded-3xl md:rounded-[36px]',
                'bg-extends-blue-gray-50 dark:bg-[1C1C2E]',
                'cursor-pointer transition-transform transform-gpu hover:scale-105',
            )}>
            <IconFactory icon={categoryData.icon} size={64} className={`text-[#${colorHex}]`} />

        </div>
    );
};
