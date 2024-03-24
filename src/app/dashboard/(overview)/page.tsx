import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { AgencyInfoMarketing } from '@/components/app/dashboard/overview/AgencyInfoMarketing';
import { FetchMarketingAgency } from '@/lib/data/data';
import { AgencyPrimaryData } from '@/components/app/dashboard/overview/AgencyPrimaryData';

export default async function Page() {
  const agency = await FetchMarketingAgency();

  return (
    <div className='flex flex-col gap-4 sm:gap-8'>
      <AgencyInfoMarketing agency={agency} />
      <AgencyPrimaryData agency={agency} />
      <h2 className='text-2xl font-semibold mb-4'>Usuarios Frecuentes</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre de usuario</TableHead>
            <TableHead>Nombre Completo</TableHead>
            <TableHead>Cantidad de Reservaciones Hechas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>juan82</TableCell>
            <TableCell>Juan Pérez</TableCell>
            <TableCell>12</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>maria89</TableCell>
            <TableCell>Maria Fernández</TableCell>
            <TableCell>9</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2 className='text-2xl font-semibold mt-8 mb-4'>
        Paquetes con un valor superior al promedio
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lugar de llegada</TableHead>
            <TableHead>Lugar de salida</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Acciones Modificar y Eliminar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Habana</TableCell>
            <TableCell>Varadero</TableCell>
            <TableCell>200.00 CUP</TableCell>
            <TableCell>
              <Button className='mr-2' variant='outline'>
                Modificar
              </Button>
              <Button variant='destructive'>Eliminar</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Santiago</TableCell>
            <TableCell>Trinidad</TableCell>
            <TableCell>350.00 CUP</TableCell>
            <TableCell>
              <Button className='mr-2' variant='outline'>
                Modificar
              </Button>
              <Button variant='destructive'>Eliminar</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
