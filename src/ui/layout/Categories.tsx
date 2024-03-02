import clsx from 'clsx';
import Link from 'next/link';
import { categories } from '@/libs/data';
import { usePathname } from 'next/navigation';

export const Categories = () => {
  const currentPath = usePathname();

  return (
    <div
      className={clsx(
        'flex flex-row flex-1 min-w-6 w-full justify-start md:justify-center items-center gap-4 md:gap-16',
        'overflow-x-auto'
      )}
    >
      {categories.map((category, index) => (
        <Link
          href={category.href}
          key={index}
          className={clsx(
            'gap-1 md:gap-2 flex flex-row justify-start items-center',
            {
              'text-blue-500': category.href === currentPath,
              'text-gray-500 dark:text-gray-300': category.href !== currentPath,
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
