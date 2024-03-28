import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DeleteHotel } from "@/lib/actions/Admin/hotel/hotel";
import { FetchHotels } from "@/lib/data/data";
import { hotel } from "@/lib/entities";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";
import { IconTrash } from "@tabler/icons-react";

export async function HotelsTable({
 query,
 currentPage,
}: {
 query: string;
 currentPage: number;
}) {
    const hotels: hotel[] = await FetchHotels(query, currentPage);

    function DeleteAction(id: number) {
        return DeleteHotel.bind(null, id);
    }
    
    return (
        <section>
            <h2 className='text-2xl font-semibold'>Hoteles en Travelix</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Dirección</TableHead>
                        <TableHead>Categoría</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        hotels.map((hotel) => (
                            <TableRow key={hotel.id}>
                                <TableCell>{hotel.name}</TableCell>
                                <TableCell>{hotel.address}</TableCell>
                                <TableCell>{hotel.category}</TableCell>
                                <TableCell className="flex flex-row gap-1">
                                    <Link href={`/admin/hotels/${hotel.id}/edit`}>
                                        <IconEdit size={24} stroke={1.5} />
                                        <span className="sr-only">Edit</span>
                                    </Link>
                                    <form action={DeleteAction(hotel.id)}>
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
