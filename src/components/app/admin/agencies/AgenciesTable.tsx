import { Delete } from "@/components/ui/Delete";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DeleteAgency } from "@/lib/actions/Admin/agency/agency";
import { FetchAgencies } from "@/lib/data/data";
import { agency } from "@/lib/entities";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";

export async function AgenciesTable() {
    const agencies: agency[] = await FetchAgencies();

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
                        agencies.map((agency) => (
                            <TableRow key={agency.id}>
                                <TableCell>#{agency.fax}</TableCell>
                                <TableCell>{agency.name}</TableCell>
                                <TableCell>{agency.address}</TableCell>
                                <TableCell>{agency.email}</TableCell>
                                <TableCell className="flex flex-row gap-1">
                                    <Link href={`/admin/agencies/${agency.id}/edit`}>
                                        <IconEdit size={24} />
                                        <span className="sr-only">Edit</span>
                                    </Link>
                                    <Delete serverAction={DeleteAgency} id={agency.id} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    );
}

