'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { category } from '@/lib/definitions';
import { adminCategories, categories, enterpriseCategories } from '@/lib/dataComponents';

const CategoriesFactory = ({
  categories,
  triggerCls,
}: {
  categories: category[];
  triggerCls: (href: string) => string;
}) => {
  return (
    <div
      className={clsx(
        'flex flex-row flex-1 min-w-6 w-full justify-start md:justify-center items-center gap-4 md:gap-8',
        'overflow-x-auto'
      )}
    >
      {categories.map((category, index) => (
        <Link
          href={category.href}
          key={index}
          className={clsx(
            'gap-1 flex flex-row justify-start items-center',
            triggerCls(category.href)
          )}
        >
          {category.icon}
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export const Categories = () => {
  function Trigger(href: string) {
    const currentPath = usePathname();
    return currentPath === href
      ? 'text-blue-500'
      : 'text-gray-500 dark:text-gray-300 opacity-80 hover:opacity-100';
  }

  return <CategoriesFactory categories={categories} triggerCls={Trigger} />;
};


function Trigger(href: string) {
  const currentPath = usePathname();
  return currentPath === href
    ? 'text-orange-500'
    : 'text-gray-500 dark:text-gray-300';
}

export const EnterpriseCategories = () => {
  return (
    <CategoriesFactory categories={enterpriseCategories} triggerCls={Trigger} />
  );
};


export const AdminCategories = () => {
  return (
    <CategoriesFactory categories={adminCategories} triggerCls={Trigger} />
  );
}