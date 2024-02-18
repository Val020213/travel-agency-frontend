import clsx from 'clsx';
import React from 'react';

export const CategoryButton = ({
  name,
  icon,
  isActive,
}: {
  name: string;
  icon: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <div
      className={clsx(
        'text-gray-800 dark:bg-extends-darker-blue-300 gap-2 text-base leading-7 font-medium',
        { 'text-blue-500': isActive },
        'flex flex-row justify-start items-center gap-2'
      )}
    >
      {icon}
      {name}
    </div>
  );
};
