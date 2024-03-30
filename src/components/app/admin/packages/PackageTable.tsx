import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DeletePackage } from "@/lib/actions/Admin/package/package";
import { FetchPackages } from "@/lib/data/data";
import { touristPackage } from "@/lib/entities";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";
import { IconTrash } from "@tabler/icons-react";

export async function PackagesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
    const packages: touristPackage[] = await FetchPackages(query, currentPage);

    function DeleteAction(id: number)
    {
        return DeletePackage.bind(null, id)
    }
    
    return (
        <section>
            <h2 className='text-2xl font-semibold'>Agencias en Travelix</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Fax</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Dirección</TableHead>
                        <TableHead>Correo</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        packages.map((touristPackages) => (
                            <TableRow key={touristPackages.id}>
                                <TableCell>#{touristPackages.agencyID}</TableCell>
                                <TableCell>{touristPackages.description}</TableCell>
                                <TableCell>{touristPackages.duration}</TableCell>
                                <TableCell>{touristPackages.excursionID}</TableCell>
                                {/* <TableCell>{touristPackages.facilities}</TableCell> */}
                                <TableCell>{touristPackages.image}</TableCell>
                                <TableCell>{touristPackages.price}</TableCell>
                                <TableCell className="flex flex-row gap-1">
                                    <Link href={`/admin/packages/${touristPackages.id}/edit`}>
                                        <IconEdit size={24} stroke={1.5} />
                                        <span className="sr-only">Edit</span>
                                    </Link>
                                    <form action={DeleteAction(touristPackages.id)}>
                                        <button type='submit'>
                                            <IconTrash size={24} stroke={1.5}/>
                                        </button>
                                    </form>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    );
}


