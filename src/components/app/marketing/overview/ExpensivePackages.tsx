import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table"
import { FetchExpensivePackages } from "@/lib/actions/marketing/marketing"
import { touristPackage } from "@/lib/entities"
import ExcelExport from "./statistics"
export async function ExpensivePackages({ agencyID }: { agencyID: number }) {
    const expensivePackages: touristPackage[] = await FetchExpensivePackages()

    return (
        <section>
            <h2 className='text-2xl font-semibold mt-8 mb-4'>
                Paquetes con un valor superior al promedio
            </h2>
            <div className="h-24 md:h-60 lg:h-96 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Descripcion</TableHead>
                            <TableHead>Duración</TableHead>
                            <TableHead>Precio</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            expensivePackages.map((touristPackage) => (
                                <TableRow key={touristPackage.id}>
                                    <TableCell>{touristPackage.description}</TableCell>
                                    <TableCell>{touristPackage.duration}</TableCell>
                                    <TableCell>{touristPackage.price}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
            <h2 className='text-2xl font-semibold mt-8 mb-4'>
                Cantidad total de paquetes: {expensivePackages.length}
            </h2>
            <ExcelExport endpoint="http://127.0.0.1:8000/agency/packages_above_average/4?export=excel" title=" packages above average in agency"/> 
            {/* <ExcelExport endpoint="http://127.0.0.1:8000/statistics/packages-above-average?export=excel" title="packages above average"/> */}
        </section >
    )
}