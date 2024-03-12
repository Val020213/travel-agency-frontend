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
import { FetchExcursions } from '@/libs/data';
import { product } from '@/libs/definitions';

export const ExcursionProducts = () => {
  const [data, setData] = useState<product[]>([]);
  useEffect(() => {
    FetchExcursions().then((data) => {
      setData(data);
    });
  });

  return (
    <div className='flex flex-col gap-8'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/excursions'>Excursiones</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Todas las excursiones</BreadcrumbPage>
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
