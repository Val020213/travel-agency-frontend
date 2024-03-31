'use client'
import { useSearchParams } from 'next/navigation';
import { ProgressManager } from '@/components/app/tourist/payment/ProgressManager';
import { CreateExcursionReservation, CreateTouristPackageReservation } from '@/lib/actions/Tourist/reservation';
import { InformationAction } from '@/components/app/tourist/payment/InformationTab';

function PaymentAction(type : string) {
  return type === 'excursion' ? CreateExcursionReservation : CreateTouristPackageReservation
}



export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const typeAction = searchParams.get('type') ?? 'excursion'
  const step  = searchParams.get('step') ?? '0'
  
  return (
    <section className='flex flex-col gap-24'>
      <ProgressManager step={parseInt(step)} />
      <form action={PaymentAction(typeAction)}>
        <div>
          <InformationAction type={typeAction} id={Number(params.id)} />
        </div>
      </form>
    </section>
  )
}


