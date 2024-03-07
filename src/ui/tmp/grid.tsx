import { ProductCard } from '../products/Card';
import { ContinueCard } from '../products/ContinueCard';

export default function Component() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xlg:gird-cols-5 gap-6 p-4 md:p-6'>
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
    </section>
  );
}
