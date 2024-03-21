import { LayoutGrid } from './components/LayoutGrid';
import { ContinueCard } from './components/ContinueCard';
import { ProductCard } from './components/ProductCard';
import { seedData } from '@/libs/data/seedData';
import { useEffect, useState } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { product } from '@/libs/definitions';
import { FetchPackages } from '@/libs/data/data';

export const PackageProducts = () => {
  const [data, setData] = useState<product[]>([]);

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
        {data.map((product) => (
          <ProductCard
            key={product.id}
            href={`/packages/${product.id}`}
            tag={product.tag}
            imageSrc={product.image}
            title={product.name}
            description={product.description}
            metaData1={product.price}
            metaData2={'cup'}
          />
        ))}
        <ContinueCard action={() => {}} />
      </LayoutGrid>
    </div>
  );
};
