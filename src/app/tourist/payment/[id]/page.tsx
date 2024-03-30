'use client'
import { useSearchParams } from 'next/navigation';
import { ProgressManager } from '@/components/app/tourist/payment/ProgressManager';
import { CreateExcursionReservation, CreateTouristPackageReservation } from '@/lib/actions/Tourist/reservation';

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
  
}

async function TouristPackageInformationTab(id:number, classNameTrigger : string) {
  
}

