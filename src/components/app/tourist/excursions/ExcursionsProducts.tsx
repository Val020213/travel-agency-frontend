'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { ProductCard } from '@/components/ui/ProductCard';
import { FetchExcursions } from '@/lib/data/data';
import { excursion } from '@/lib/entities';
import { LayoutGrid } from '../../layout/LayoutGrid';
import { ContinueCard } from '@/components/ui/ContinueCard';
import { useEffect, useState } from 'react';

export function ExcursionProducts() {
  const [limit, setLimit] = useState<number>(10)
  const [data, setData] = useState<excursion[]>([])

  useEffect(() => {
    FetchExcursions('', 1, limit).then((excursion: excursion[]) => {
      setData(excursion);
    });
  },)

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
            title={excursion.arrivalLocation}
            description={
              'Salida desde ' +
              excursion.departureLocation +
              ' a las ' +
              excursion.departureTime +
              '. Llegada a ' +
              excursion.arrivalLocation +
              ' a las ' +
              excursion.arrivalTime +
              '.'
            }
            image={excursion.image}
            href={'/tourist/payment/excursion/' + excursion.id + '?type=excursion'}
          />
        ))}
         <ContinueCard onClick={() => {setLimit(limit + 10)}} />
      </LayoutGrid>
    </div>
  );
}
