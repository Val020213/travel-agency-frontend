import React from 'react';
import { categoriesData } from './categoriesData';
import { CategoryFactory } from '@/components/molecules/CategoryCards/CategoryFactory';
import { Tooltip } from '@/components/utilities/Tooltip';

export const CategorySection = () => {
  return (
    <section className='flex flex-row overflow-x-hidden md:w-full md:*:w-full py-8 gap-12'>
      {categoriesData.map((category, index) => (
        <button key={index}>
          {CategoryFactory(
            index.toString(),
            category,
            'text-green-300 dark:text-green-600'
          )}
        </button>
      ))}
    </section>
  );
};
