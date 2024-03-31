import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DeletePackage } from '@/lib/actions/Admin/package/package';
import {
  FetchPackages,
  GetAgencyByID,
  GetExcursionByID,
} from '@/lib/data/data';
import { touristPackage } from '@/lib/entities';
import { IconEdit } from '@tabler/icons-react';
import Link from 'next/link';
import { IconTrash } from '@tabler/icons-react';

async function GetAgencyInfo(packageID: number): Promise<string> {
  const agency = await GetAgencyByID(packageID);
  return agency.name;
}

export async function PackagesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const packages: touristPackage[] = await FetchPackages(query, currentPage);

  function DeleteAction(id: number) {
    return DeletePackage.bind(null, id);
  }

  return (
    <section>
      <h2 className='text-2xl font-semibold'>Paquetes en Travelix</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Id</TableHeader>
            <TableHeader>Agencia</TableHeader>
            <TableHeader>Excursión</TableHeader>
            <TableHeader>Descripción</TableHeader>
            <TableHeader>Precio</TableHeader>
            <TableHeader>Acciones</TableHeader>
          </TableRow>
          <TableBody>
            {packages.map((p) => (
              <TableRow key={p.id}>
                <TableCell>#{p.id}</TableCell>
                <TableCell>{p.agencyID}</TableCell>
                <TableCell>{p.excursionID}</TableCell>
                <TableCell>{p.description}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>
                  <Link href={`/admin/packages/edit/${p.id}`}>
                      <IconEdit size={20} />                    
                  </Link>
                  <IconTrash size={20} onClick={DeleteAction(p.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableHead>
      </Table>
    </section>
  );
}
