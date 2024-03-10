'use client';

import { ExcursionProducts } from '@/ui/products/ExcursionsProducts';
import { PackageProducts } from '@/ui/products/PackageProducts';
import { AgencyProducts } from '@/ui/products/AgencyProducts';
import { CategoryCard } from '@/ui/cards/CategoryCard';
import { categories } from '@/libs/data';



export default function Home() {
  return (
    <div className='flex flex-col gap-8 md:gap-16 lg-gap-24 py-4'>
      <div className='flex flex-row gap-4 md:gap-8 overflow-x-scroll lg:overflow-visible lg:w-full md:*:w-full'>
        {
          categories.map((category, index) => (
            category.href !== '/' &&
            <CategoryCard
              key={index}
              categoryType={index + 1}
              href={category.href}
            />
          ))
        }
      </div>

      <ExcursionProducts />
      <PackageProducts />
      <AgencyProducts />
    </div>
  );
}
