'use client'
import { useSearchParams } from 'next/navigation';
import { ProgressManager } from '@/components/app/tourist/payment/ProgressManager';
import { CreateExcursionReservation, CreateTouristPackageReservation } from '@/lib/actions/Tourist/reservation';
import { FetchExcursionByID, FetchPackagesByID } from '@/lib/data/data';

function PaymentAction(type : string) {
  return type === 'excursion' ? CreateExcursionReservation : CreateTouristPackageReservation
}

function InformationAction({type, id} : {type : string, id : number}){
  return type === 'excursion' ? <ExcusionInformationTab id={id}/>  : <TouristPackageInformationTab id={id} />
}

export default function Page({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const typeAction = searchParams.get('type') ?? ''
  const step  = searchParams.get('step') ?? '0'
  
  return (
    <section>
      <ProgressManager step={parseInt(step)} />
      <form action={PaymentAction(typeAction)}>
        <div>
          <InformationAction type={typeAction} id={Number(params.id)} />
        </div>
      </form>
    </section>
  )
}

async function ExcusionInformationTab(id: number) {
  const excursion  = await FetchExcursionByID(id)
  console.log(excursion)
  return{
    excursion
  }
}

async function TouristPackageInformationTab(id: number) {
  const touristPackage = await FetchPackagesByID(id)
  console.log(touristPackage)
  return{
    touristPackage
  }
}

