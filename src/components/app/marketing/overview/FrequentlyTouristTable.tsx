import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { FetchFrecuentlyTourist } from "@/lib/actions/marketing/marketing";
import { tourist } from "@/lib/entities";
import ExcelExport from "./statistics";
import clsx from "clsx";
import { randomInt } from "crypto";


export async function FrequentlyTouristTable({ agencyID }: { agencyID: number }) {

    const tourist: tourist[] = await FetchFrecuentlyTourist()

    return (
        <section>
            <h2 className='text-2xl font-semibold mb-4'>Usuarios Frecuentes</h2>
            <div className="h-24 md:h-60 lg:h-96 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nombre de usuario</TableHead>
                            <TableHead>Dirección electrónica</TableHead>
                            <TableHead>Cantidad de Reservaciones Hechas</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tourist.map((tourist) => (
                            <TableRow key={tourist.id}>
                                <TableCell>{tourist.name}</TableCell>
                                <TableCell>{tourist.email}</TableCell>
                                <TableCell>{tourist.reservationTotal}</TableCell>
                            </TableRow>))
                        }
                    </TableBody>
                </Table>
            <ExcelExport endpoint="http://127.0.0.1:8000/agency/most_frecuent_tourists/4?export=excel" title="most frecuent tourists"/>
            </div>
        </section >
    )

}