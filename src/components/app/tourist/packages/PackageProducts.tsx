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
import { FetchPackages } from '@/lib/data/data';
import { touristPackage } from '@/lib/entities';

export async function PackageProducts() {
  const data : touristPackage[] = await FetchPackages();

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
            description={touristPackage.description}
            image={touristPackage.image}
            href={'/package/' + touristPackage.id}
          />
        ))}
        <ContinueCard />
      </LayoutGrid>
    </div>
  );
}
