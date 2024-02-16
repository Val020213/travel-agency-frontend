import { useState } from 'react';
import { categoriesData } from '../organism/Categories/categoriesData';
import { IconChevronDown } from '@tabler/icons-react';
import clsx from 'clsx';

export const CategoryMenu = () => {
  const [currentCategory, setCurrentCategory] = useState<number>(1); //TODO
  const [open, setOpen] = useState<boolean>(false);

  function handleButtonClick(index: number) {
    setOpen(!open);
    setCurrentCategory(index);
  }

  return (
    <div
      className={clsx(
        'flex flex-col *:p-2 justify-start items-start w-max relative',
        ' font-bold text-base leading-6',
        'text-gray-500 dark:text-gray-50'
      )}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className='flex flex-row md:gap-1' onClick={() => setOpen(!open)}>
        {categoriesData[currentCategory].shortName} <IconChevronDown />
      </button>
      {open && (
        <div className='flex flex-col justify-start items-start w-max absolute mt-8 z-10 gap-2'>
          {categoriesData.map(
            (category, index) =>
              index != currentCategory && (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index)}
                  className='hover:text-orange-500 w-full flex justify-start items-start'
                >
                  {category.shortName}
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
};
