import LayoutGrid from './components/grid';
import { ContinueCard } from './components/ContinueCard';
import { ProductCard } from './components/Card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

export const ExcursionProducts = () => {
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
        <ProductCard
          href='#'
          tag='Alojamiento'
          imageSrc={require('@/ui/assets/products/IMG_20220825_101112.jpg')}
          title='Canasi Cuba'
          description='A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua'
          metaData1='2000'
          metaData2='cup'
        />
        <ProductCard
          href='#'
          tag=''
          imageSrc={require('@/ui/assets/products/IMG_20220825_101112.jpg')}
          title='Canasi Cuba'
          description='A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua'
          metaData1='2000'
          metaData2='cup'
        />
        <ProductCard
          href='#'
          tag=''
          imageSrc={require('@/ui/assets/products/IMG_20220825_101112.jpg')}
          title='Canasi Cuba'
          description='A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua'
          metaData1='2000'
          metaData2='cup'
        />
        <ProductCard
          href='#'
          tag=''
          imageSrc={require('@/ui/assets/products/IMG_20220825_101112.jpg')}
          title='Canasi Cuba'
          description='A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua'
          metaData1='2000'
          metaData2='cup'
        />
        <ProductCard
          href='#'
          tag=''
          imageSrc={require('@/ui/assets/products/IMG_20220825_101112.jpg')}
          title='Canasi Cuba'
          description='A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua'
          metaData1='2000'
          metaData2='cup'
        />
        <ProductCard
          href='#'
          tag=''
          imageSrc={require('@/ui/assets/products/IMG_20220825_101112.jpg')}
          title='Canasi Cuba'
          description='A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua'
          metaData1='2000'
          metaData2='cup'
        />
        <ProductCard
          href='#'
          tag=''
          imageSrc={require('@/ui/assets/products/IMG_20220825_101112.jpg')}
          title='Canasi Cuba'
          description='a'
          metaData1='2000'
          metaData2='cup'
        />
        <ProductCard
          href='#'
          tag=''
          imageSrc={require('@/ui/assets/products/IMG_20220825_101112.jpg')}
          title='Canasi Cuba'
          description='A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua A beutiful place con agua'
          metaData1='2000'
          metaData2='cup'
        />
        <ContinueCard action={() => {}} />
      </LayoutGrid>
    </div>
  );
};
