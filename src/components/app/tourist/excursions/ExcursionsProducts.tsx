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

export async function ExcursionProducts() {
  const data = await FetchExcursions('', 0);

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
        <ContinueCard />
      </LayoutGrid>
    </div>
  );
}
