import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DeleteExcursion } from "@/lib/actions/Admin/excursion/excursion";
import { FetchExcursions } from "@/lib/data/data";
import { excursion } from "@/lib/entities";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";
import { IconTrash } from "@tabler/icons-react";


export async function ExcursionsTable({
 query,
 currentPage,
}: {
 query: string;
 currentPage: number;
}) {
    const excursions: excursion[] = await FetchExcursions(query, currentPage);
    function DeleteAction(id: number) {
        return DeleteExcursion.bind(null, id);
    }
    
    return (
        <section>
            <h2 className='text-2xl font-semibold'>Excursiones en Travelix</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        {/* considerar poner aqui tambien la fecha arreglar despues */}
                        <TableHead>Día de Salida</TableHead>
                        <TableHead>Hora de Salida</TableHead>
                        <TableHead>Lugar de Salida</TableHead>
                        <TableHead>Día de Llegada</TableHead>
                        <TableHead>Hora de Llegada</TableHead>
                        <TableHead>Lugar de Llegada</TableHead>
                        <TableHead>Precio</TableHead>
                        <TableHead>Photo URL</TableHead> 
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        excursions.map((excursion) => (
                            <TableRow key={excursion.id}>
                                <TableCell>{excursion.departureDate}</TableCell>
                                <TableCell>{excursion.departureTime}</TableCell>
                                <TableCell>{excursion.departureLocation}</TableCell>
                                <TableCell>{excursion.arrivalDate.toString()}</TableCell>
                                <TableCell>{excursion.arrivalTime}</TableCell>
                                <TableCell>{excursion.arrivalLocation}</TableCell>
                                <TableCell>{excursion.price}</TableCell>
                                <TableCell>{excursion.image}</TableCell>
                                <TableCell className="flex flex-row gap-1">
                                    <Link href={`/admin/excursions/${excursion.id}/edit`}>
                                        <IconEdit size={24} stroke={1.5} />
                                        <span className="sr-only">Edit</span>
                                    </Link>
                                    <form action={DeleteAction(excursion.id)}>
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
