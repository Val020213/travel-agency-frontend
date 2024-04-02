import { EditHotel } from "@/components/app/admin/hotels/EditHotel";
import { GetHotelByID } from "@/lib/data/data";
import { hotel } from "@/lib/entities";
import { fixPath } from "@/lib/utils";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const hotel: hotel = await GetHotelByID(Number.parseInt(id));

    return (
        <section className="flex flex-col gap-4">
            <h2 className='text-2xl font-semibold'>Editando Hotel</h2>
            <EditHotel
                name={hotel.name}
                address={hotel.address}
                category={hotel.category}
                photoUrl={fixPath(hotel.image)}
                id={hotel.id}
            />
        </section>
    );
}
