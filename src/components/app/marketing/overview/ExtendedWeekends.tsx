import { Table, TableHead, TableRow, TableCell, TableBody, TableHeader } from "@/components/ui/table";
import { FetchExtendedExcursions } from "@/lib/actions/marketing/marketing";
import { excursion } from "@/lib/entities";

export default async function ExtendedWeekendsTable({
 query,
 currentPage,
}: {
 query: string;
 currentPage: number;
})
{ 
    const extendedExcursions: excursion[] = await FetchExtendedExcursions('',currentPage);

    return(
       <section>
            <h2 className='text-2xl font-semibold'>Excursiones extendidas</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Día de Salida</TableHead>
                        <TableHead>Hora de Salida</TableHead>
                        <TableHead>Lugar de Salida</TableHead>
                        <TableHead>Día de Llegada</TableHead>
                        <TableHead>Hora de Llegada</TableHead>
                        <TableHead>Lugar de Llegada</TableHead>
                        <TableHead>Precio</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        extendedExcursions.map((extendedExcursions) => (
                            <TableRow key={extendedExcursions.id}>
                                <TableCell>{extendedExcursions.departureDate}</TableCell>
                                <TableCell>{extendedExcursions.departureTime}</TableCell>
                                <TableCell>{extendedExcursions.departureLocation}</TableCell>
                                <TableCell>{extendedExcursions.arrivalDate.toString()}</TableCell>
                                <TableCell>{extendedExcursions.arrivalTime}</TableCell>
                                <TableCell>{extendedExcursions.arrivalLocation}</TableCell>
                                <TableCell>{extendedExcursions.price}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    )
}