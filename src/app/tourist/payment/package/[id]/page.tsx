'use client'
import { ProgressManager } from '@/components/app/tourist/payment/ProgressManager';
import { CreateTouristPackageReservation } from '@/lib/actions/Tourist/reservation';
import { TouristPackageInformationTab } from '@/components/app/tourist/payment/TouristPackageInformationTab';
import { ContinueLink } from '@/components/app/layout/navbar/modal/ContinueButton';
import { useSearchParams } from 'next/navigation';

export default function Page({ params }: { params: { id: string } }) {

  const searchParams = useSearchParams()

  return (
    <section className='flex flex-col gap-24'>
      <ProgressManager />
      <form action={CreateTouristPackageReservation}>
        <div>
          <TouristPackageInformationTab id={Number(params.id)} />
        </div>
        <div className='flex flex-row py-8 justify-end'>
          <div className='w-1/4'>
          <ContinueLink text='Proceder' href='?step=2' />
        </div>
        </div>
      </form>
    </section>
  )
}


