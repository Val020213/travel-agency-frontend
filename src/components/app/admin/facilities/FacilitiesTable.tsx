import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DeleteFacility } from "@/lib/actions/Admin/facility/facility";
import { FetchFacilities } from "@/lib/data/data";
import { facility } from "@/lib/entities";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";
import { IconTrash } from "@tabler/icons-react";

export async function FacilitiesTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const facilities: facility[] = await FetchFacilities(query, currentPage);

    function DeleteAction(id: number) {
        return DeleteFacility.bind(null, id);
    }

    return (
        <section>
            <h2 className='text-2xl font-semibold'>Facilidades en Travelix</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Descripción</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        facilities.map((facility) => (
                            <TableRow key={facility.id}>
                                <TableCell>{facility.description}</TableCell>
                                <TableCell className="flex flex-row gap-1">
                                    <form action={DeleteAction(facility.id)}>
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
