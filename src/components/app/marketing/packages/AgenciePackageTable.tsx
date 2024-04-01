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
import { FetchPackagesInAgency } from '@/lib/actions/marketing/marketing';

async function GetAgencyInfo(packageID: number): Promise<string> {
  const agency = await GetAgencyByID(packageID);
  return agency.name;
}

export async function AgenciePackageTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const packages: touristPackage[] = await FetchPackagesInAgency(query, currentPage);

  function DeleteAction(id: number) {
    return DeletePackage.bind(null, id);
  }

  return (
    <section>
      <h2 className='text-2xl font-semibold'>Paquetes en la Agencia</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Agencia</TableHead>
            <TableHead>Excursión</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {packages.map((p) => (
            <TableRow key={p.id}>
              <TableCell>#{p.id}</TableCell>
              <TableCell>{p.agencyID}</TableCell>
              <TableCell>{p.excursionID}</TableCell>
              <TableCell>{p.description}</TableCell>
              <TableCell>{p.price}</TableCell>
              <TableCell className='flex flex-row gap-1'>
                <Link href={`/marketing/packages/edit/${p.id}`}>
                  <IconEdit size={24} stroke={1.5} />
                </Link>
                <form action={DeleteAction(p.id)}>
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
