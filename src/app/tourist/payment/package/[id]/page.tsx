'use client';
import { ProgressManager } from '@/components/app/tourist/payment/ProgressManager';
import { CreateTouristPackageReservation } from '@/lib/actions/Tourist/reservation';
import { TouristPackageInformationTab } from '@/components/app/tourist/payment/TouristPackageInformationTab';
import { ContinueButton, ContinueLink } from '@/components/app/layout/navbar/modal/ContinueButton';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import ReservationTravelInput from '@/components/app/tourist/payment/ReservationTravelInput';
import { PackagePayment } from '@/components/app/tourist/payment/PackagePaymentMethod';

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const step = Number(searchParams.get('step') ?? 1);

  return (
    <section className='flex flex-col gap-24'>
      <ProgressManager step={step} />
      <form action={CreateTouristPackageReservation}>
        <div className={clsx({ hidden: step > 1 })}>
          <TouristPackageInformationTab id={Number(params.id)} />
          <div className='flex flex-row py-8 justify-end'>
            <div className='w-1/4'>
              <ContinueLink text='Proceder' href='?step=2' />
            </div>
          </div>
        </div>
        <div className={clsx({ hidden: step != 2 })}>
          <ReservationTravelInput />
          <div className='flex flex-row py-8 justify-end'>
            <div className='w-1/4'>
              <ContinueLink text='Proceder' href='?step=3' />
            </div>
          </div>
        </div>

        <div className={clsx({ hidden: step < 3 })}>
          <PackagePayment packageID={Number(params.id)} />
          <div className='flex flex-row py-8 justify-end'>
            <div className='w-1/4'>
              <ContinueButton  text='Proceder con el pago' />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
