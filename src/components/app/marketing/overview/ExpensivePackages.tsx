import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table"
import { FetchExpensivePackages } from "@/lib/data/data"
import { touristPackage } from "@/lib/entities"
export async function ExpensivePackages({ agencyID }: { agencyID: number }) {
    const expensivePackages: touristPackage[] = await FetchExpensivePackages(agencyID)

    return (
        <section>
            <h2 className='text-2xl font-semibold mt-8 mb-4'>
                Paquetes con un valor superior al promedio
            </h2>
            <div className="h-24 md:h-60 lg:h-96 overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Id</TableHead>
                            <TableHead>Descripcion</TableHead>
                            <TableHead>Duración</TableHead>
                            <TableHead>Facilidades</TableHead>
                            <TableHead>Precio</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            expensivePackages.map((touristPackage) => (
                                <TableRow key={touristPackage.id}>
                                    <TableCell>{touristPackage.id}</TableCell>
                                    <TableCell>{touristPackage.description}</TableCell>
                                    <TableCell>{touristPackage.duration}</TableCell>
                                    <TableCell>{touristPackage.facilities.map(facility => facility.description).join(', ')}</TableCell>
                                    <TableCell>{touristPackage.price}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </section >
    )
}