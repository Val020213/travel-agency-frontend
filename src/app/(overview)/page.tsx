'use client';

import { ExcursionProducts } from '@/ui/products/ExcursionsProducts';
import { PackageProducts } from '@/ui/products/PackageProducts';
import { AgencyProducts } from '@/ui/products/AgencyProducts';

export default function Home() {
  return (
    <div className='flex flex-col gap-8 md:gap-16 lg-gap-24 py-4'>
      <ExcursionProducts />
      <PackageProducts />
      <AgencyProducts />
    </div>
  );
}
