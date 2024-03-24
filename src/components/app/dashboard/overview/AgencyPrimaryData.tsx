import { agency } from '@/lib/entities';
import { FetchAgencyPrimaryData } from '@/lib/data/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export async function AgencyPrimaryData({ agency }: { agency: agency }) {
  const data = await FetchAgencyPrimaryData(agency.id);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
      <Card className='bg-white dark:bg-extends-darker-blue-900'>
        <CardHeader>
          <CardTitle>Total de Reservaciones hechas</CardTitle>
        </CardHeader>
        <CardContent className='text-center'>
          <p className='text-5xl font-bold'>54</p>
        </CardContent>
      </Card>
      <Card className='bg-white dark:bg-extends-darker-blue-900'>
        <CardHeader>
          <CardTitle>Importe total de las Reservaciones</CardTitle>
        </CardHeader>
        <CardContent className='text-center'>
          <p className='text-5xl font-bold'>31,212.00</p>
          <p className='text-sm font-medium'>CUP</p>
        </CardContent>
      </Card>
    </div>
  );
}
