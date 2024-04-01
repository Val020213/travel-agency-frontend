'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { FetchPackagesByAgency } from '@/lib/data/data';
import { touristPackage } from '@/lib/entities';
import { LayoutGrid } from '../../layout/LayoutGrid';
import { ProductCard } from '@/components/ui/ProductCard';
import { ContinueCard } from '@/components/ui/ContinueCard';
import { useEffect, useState } from 'react';

export function AgencyPackageProducts({agency_id} : {agency_id : number}) {
  const [limit, setLimit] = useState<number>(10)
  const [data, setData] = useState<touristPackage[]>([])

  useEffect(() => {
    FetchPackagesByAgency(agency_id,'', 1, limit).then((packages: touristPackage[]) => {
      setData(packages);
    });
  },[agency_id, limit])

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
            href={'/agent/payment/package/' + touristPackage.id}
          />
        ))}
        <ContinueCard onClick={() => {setLimit(limit + 10)}} />
      </LayoutGrid>
    </div>
  );
}
