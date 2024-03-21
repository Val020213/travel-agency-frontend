import { LayoutGrid } from './components/LayoutGrid';
import { ContinueCard } from './components/ContinueCard';
import { ProductCard } from './components/ProductCard';
import { seedData } from '@/libs/data/seedData';
import { useEffect, useState } from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { product } from '@/libs/definitions';

export const CompomenteDePrueba = () => {

  const [data, setData] = useState<product[]>([]);

  useEffect(() => {
    seedData().then((data) => setData(data));
  }, []);

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
        {
          data.map((product: product, index: number) => (
            <ProductCard
              key={index}
              href="#"
              tag={product.tag}
              image={product.image}
              title={product.name}
              description={product.description}
              metaData1={product.price}
              metaData2="cup"
            />
          ))
        }
        <ProductCard
          key={10000}
          href="#"
          tag="Oferta"
          image='https://th.bing.com/th/id/R.4c450d5ebdff00ef23ee46dc663b7163?rik=Xy1kCYGwuLXd%2bA&pid=ImgRaw&r=0'
          title="Welcome to italy"
          description="Conoce los mejores destinos de italia"
          metaData1={100}
          metaData2="cup"
        />
        <ContinueCard action={() => { }} />
      </LayoutGrid>
    </div>
  );
};
