import LayoutGrid from './components/LayoutGrid';
import { ContinueCard } from './components/ContinueCard';
import { ProductCard } from './components/Card';
import { productsData } from '@/libs/mapData';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

export const PackageProducts = () => {
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
        {productsData.map((product, index) => (
          <ProductCard
            key={index}
            title={product.name}
            description={product.description}
            imageSrc={product.image}
            href={''}
            metaData1={product.price}
            metaData2='CUP'
          />
        ))}
        <ContinueCard action={() => {}} />
      </LayoutGrid>
    </div>
  );
};
