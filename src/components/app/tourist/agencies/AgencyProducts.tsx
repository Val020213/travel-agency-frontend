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
import { FetchAgencies } from '@/lib/data/data';
import { agency } from '@/lib/entities';

export async function AgencyProducts() {
  const data : agency[] = await FetchAgencies();

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
        {data.map((agency: agency) => (
          <ProductCard
            key={agency.id}
            title={agency.name}
            description={
              'Agencia de viajes ubicada en ' +
              agency.address +
              '. Puede localizarnos en ' +
              agency.email +
              '.'
            }
            image={agency.image}
            href={'/agency/' + agency.id}
          />
        ))}
        <ContinueCard />
      </LayoutGrid>
    </div>
  );
}
