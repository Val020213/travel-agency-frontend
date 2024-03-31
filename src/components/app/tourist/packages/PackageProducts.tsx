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
import { LayoutGrid } from '../../layout/LayoutGrid';
import { ProductCard } from '@/components/ui/ProductCard';
import { ContinueCard } from '@/components/ui/ContinueCard';

export async function PackageProducts() {
  const data : touristPackage[] = await FetchPackages('',0, 100000);
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
            href={'/tourist/payment/package/' + touristPackage.id }
          />
        ))}
        <ContinueCard />
      </LayoutGrid>
    </div>
  );
}
