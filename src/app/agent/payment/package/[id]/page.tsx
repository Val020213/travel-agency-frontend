'use client';
import { ProgressManager } from '@/components/app/tourist/payment/ProgressManager';
import {
  CreateTouristPackageReservation,
  TouristReservationState,
} from '@/lib/actions/Tourist/reservation';

import {
  ContinueButton,
  ContinueLink,
} from '@/components/app/layout/navbar/modal/ContinueButton';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import ReservationTravelInput from '@/components/app/tourist/payment/ReservationTravelInput';

import { useFormState } from 'react-dom';
import { TouristPackageInformationTab } from '@/components/app/tourist/payment/touristPackage/TouristPackageInformationTab';
import { ExtendedInputReservation } from '@/components/app/tourist/payment/touristPackage/ExtendPackageInputs';
import { PackagePayment } from '@/components/app/tourist/payment/touristPackage/PackagePaymentMethod';

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const step = Number(searchParams.get('step') ?? 1);

  const initialState: TouristReservationState = {};
  const createPackageWithId = CreateTouristPackageReservation.bind(
    null,
    Number(params.id)
  );
  const [state, dispatch] = useFormState(createPackageWithId, initialState);

  return (
    <section className='flex flex-col gap-24'>
      <ProgressManager step={step} />
      {step <= 1 && (
        <div>
          <TouristPackageInformationTab id={Number(params.id)} />
          <div className='flex flex-row py-8 justify-end'>
            <div className='w-1/4'>
              <ContinueLink text='Proceder' href='?step=2' />
            </div>
          </div>
        </div>
      )}
      <form action={dispatch}>
        <div className={clsx({ hidden: step != 2 })}>
          <ReservationTravelInput />
          <ExtendedInputReservation />
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
              <ContinueButton text='Proceder con el pago' />
            </div>
          </div>
        </div>
      </form>
      <div>
        {state.message && <p className='text-red-500'>{state.message}</p>}
        {state.errors && (
          <div className='text-red-500'>
            {state.errors.touristID &&
              state.errors.touristID.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            {state.errors.amountOfPeople &&
              state.errors.amountOfPeople.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            {state.errors.airline &&
              state.errors.airline.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
