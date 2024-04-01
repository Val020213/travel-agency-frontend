import { agency } from '@/lib/entities';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FetchAgencyNumberOfReservations, FetchAgencyTotalAmount } from '@/lib/actions/marketing/marketing';
import ExcelExport from './statistics';
export async function AgencyPrimaryData({ agency }: { agency: agency }) {
  const data = (agency.id);
  const reservations = await FetchAgencyNumberOfReservations();
  const totalAmount = await FetchAgencyTotalAmount();
  console.log(reservations, totalAmount)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
      <Card className='bg-white dark:bg-extends-darker-blue-900'>
        <CardHeader>
          <CardTitle>Total de Reservaciones hechas</CardTitle>
        </CardHeader>
        <CardContent className='text-center'>
          <p className='text-5xl font-bold'>{reservations}</p>
        </CardContent>
      </Card>
      <Card className='bg-white dark:bg-extends-darker-blue-900'>
        <CardHeader>
          <CardTitle>Importe total de las Reservaciones</CardTitle>
        </CardHeader>
        <CardContent className='text-center'>
          <p className='text-5xl font-bold'>{totalAmount}</p>
          <p className='text-sm font-medium'>CUP</p>
        </CardContent>
      </Card>
      <ExcelExport endpoint="http://127.0.0.1:8000/agency/agency-balance/4?export=excel" title ="agency balance"/>
    </div>
  );
}
