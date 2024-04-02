import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DeleteTouristType } from '@/lib/actions/Admin/touristType/touristType';
import { FetchTouristType, FetchUsers } from '@/lib/data/data';
import { touristType, user } from '@/lib/entities';
import { IconTrash } from '@tabler/icons-react';

export async function TouristTypeTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const touristType: touristType[] = await FetchTouristType(query, currentPage);

  function DeleteAction(id: number) {
    return DeleteTouristType.bind(null, id);
  }

  return (
    <section>
      <h2 className='text-2xl font-semibold'>Tipos de Turistas en Travelix</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {touristType.map((tt) => (
            <TableRow key={tt.id}>
              <TableCell>{tt.name}</TableCell>
              <TableCell className='flex flex-row gap-1'>
                <form action={DeleteAction(tt.id)}>
                  <button type='submit'>
                    <IconTrash size={24} stroke={1.5} />
                  </button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
