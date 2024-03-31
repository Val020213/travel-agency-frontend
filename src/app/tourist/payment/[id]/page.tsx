'use client'
import { useSearchParams } from 'next/navigation';
import { ProgressManager } from '@/components/app/tourist/payment/ProgressManager';
import { CreateExcursionReservation, CreateTouristPackageReservation } from '@/lib/actions/Tourist/reservation';
import { excursion } from '@/lib/entities';
import { FetchExcursionByID, FetchPackagesByID } from '@/lib/data/data';

function PaymentAction(type : string) {
  return type === 'excursion' ? CreateExcursionReservation : CreateTouristPackageReservation
}

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const typeAction = searchParams.get('type') ?? ''
  const step  = searchParams.get('step') ?? '0'

  
  return (
    <>
      <ProgressManager step={parseInt(step)} />
      <form action={PaymentAction(typeAction)}>


      </form>
    </>
  )
}

async function ExcusionInformationTab(id:number, classNameTrigger : string) {
  const excursion  = await FetchExcursionByID(id)
}

async function TouristPackageInformationTab(id:number, classNameTrigger : string) {
  const touristPackage = await FetchPackagesByID(id)
}

