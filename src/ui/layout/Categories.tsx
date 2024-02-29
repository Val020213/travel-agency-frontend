import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { categories } from '@/libs/data';
import { usePathname } from 'next/navigation';

export const Categories = () => {
  const currentPath = usePathname();

  return (
    <div
      className={clsx(
        'flex flex-row justify-start min-w-7 md:justify-center items-center w-full gap-4 md:gap-16',
        'overflow-x-auto'
      )}
    >
      {categories.map((category, index) => (
        <Link
          href={category.href}
          key={index}
          className={clsx(
            'gap-2 flex flex-row items-center',
            'text-gray-500 dark:text-gray-300',
            {
              'text-blue-500': category.href === currentPath,
            }
          )}
        >
          {category.icon}
          {category.name}
        </Link>
      ))}
    </div>
  );
};
