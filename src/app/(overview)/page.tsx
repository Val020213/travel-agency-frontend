'use client';
import { ExcursionProducts } from '@/ui/products/ExcursionsProducts';
import { PackageProducts } from '@/ui/products/PackageProducts';
import { AgencyProducts } from '@/ui/products/AgencyProducts';

export default function Home() {
  return (
    <>
      <ExcursionProducts />
      <PackageProducts />
      <AgencyProducts />
    </>
  );
}
