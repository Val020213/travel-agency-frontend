import { LayoutGrid } from './components/LayoutGrid';
import { ContinueCard } from './components/ContinueCard';
import { ProductCard } from './components/ProductCard';
import { useEffect, useState } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { FetchPackages } from '@/libs/data/data';
import { touristPackage } from '@/libs/entities';

export const PackageProducts = () => {
  const [data, setData] = useState<touristPackage[]>([]);

  useEffect(() => {
    FetchPackages().then((data) => {
      setData(data);
    });
  });

  return (
    <div className='flex flex-col gap-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/packages'>
              Paquetes turísticos
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Todas los paquetes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <LayoutGrid>
        {data.map((touristPackage: touristPackage) => (
          <ProductCard
            key={touristPackage.id}
            title={'Paquete turístico de ' + touristPackage.duration + ' días'}
            description={
              touristPackage.description
            }
            image={touristPackage.image}
            href={'/package/' + touristPackage.id}
          />
        ))}
        <ContinueCard action={() => { }} />
      </LayoutGrid>
    </div>
  );
};
