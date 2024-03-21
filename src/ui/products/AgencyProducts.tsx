import { LayoutGrid } from './components/LayoutGrid';
import { ContinueCard } from './components/ContinueCard';
import { ProductCard } from './components/ProductCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { useEffect, useState } from 'react';
import { product } from '@/libs/definitions';
import { FetchAgencies } from '@/libs/data/data';

export const AgencyProducts = () => {
  const [data, setData] = useState<product[]>([]);

  useEffect(() => {
    FetchAgencies().then((data) => {
      setData(data);
    });
  });

  return (
    <div className='flex flex-col gap-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/packages'>Agencias</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Todas las agencias</BreadcrumbPage>
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
            metaData2={'offer'}
          />
        ))}
        <ContinueCard action={() => {}} />
      </LayoutGrid>
    </div>
  );
};
