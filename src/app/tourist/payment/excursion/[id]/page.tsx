
import { ExcusionInformationTab } from '@/components/app/tourist/payment/ExcursionInformationTab';
import { ProgressManager } from '@/components/app/tourist/payment/ProgressManager';
import { CreateExcursionReservation } from '@/lib/actions/Tourist/reservation';

export default async function Page({ params }: { params: { id: string} }) {

  return (
    <section className='flex flex-col gap-24'>
      <ProgressManager />
      <form action={CreateExcursionReservation}>
        <div>
          <ExcusionInformationTab id={Number(params.id)} />
        </div>
      </form>
    </section>
  )
}


