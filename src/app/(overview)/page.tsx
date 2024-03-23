import { ExcursionProducts } from '@/components/app/tourist/excursions/ExcursionsProducts';
import { PackageProducts } from '@/components/app/tourist/packages/PackageProducts';
import { AgencyProducts } from '@/components/app/tourist/agencies/AgencyProducts';
import { Suspense } from 'react';
import { CompomenteDePrueba } from '@/components/ui/PackageProducts copy';



export default function Home() {
  return (

    <div className='flex flex-col gap-8 md:gap-16 lg-gap-24 py-4'>
      <Suspense fallback={<div>Loading...</div>}>
        <CompomenteDePrueba />
      </Suspense>

      {/* <Suspense fallback={<div>Loading...</div>}>
        <PackageProducts />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <AgencyProducts />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ExcursionProducts />
      </Suspense> */}
    </div >
  );
}
