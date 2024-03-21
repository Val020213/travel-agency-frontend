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
import { FetchExcursions } from '@/libs/data/data';
import { product } from '@/libs/definitions';
import { excursion } from '@/libs/entities';

export const ExcursionProducts = () => {
  const [data, setData] = useState<excursion[]>([]);
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
        {data.map((excursion: excursion) => (
          <ProductCard
            key={excursion.id}
            title={'Excursion a ' + excursion.arrivalLocation}
            description={'Salida desde ' + excursion.departureLocation + ' a las ' + excursion.departureTime + '. Llegada a ' + excursion.arrivalLocation + ' a las ' + excursion.arrivalTime + '.'}
            image={excursion.image}
            href={'/excursion/' + excursion.id}
          />
        ))}
        <ContinueCard action={() => { }} />
      </LayoutGrid>
    </div>
  );
};
