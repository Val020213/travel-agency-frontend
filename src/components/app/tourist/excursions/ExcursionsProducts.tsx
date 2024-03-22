import { LayoutGrid } from '../../layout/LayoutGrid';
import { ContinueCard } from '../../../ui/ContinueCard';
import { ProductCard } from '../../../ui/ProductCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { useEffect, useState } from 'react';
import { FetchExcursions } from '@/lib/data/data';
import { product } from '@/lib/definitions';
import { excursion } from '@/lib/entities';

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
