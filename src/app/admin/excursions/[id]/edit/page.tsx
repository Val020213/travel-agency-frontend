import { EditExcursion } from "@/components/app/admin/excursions/EditExcursion";
import { GetExcursionByID } from "@/lib/data/data";
import { excursion } from "@/lib/entities";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const excursionData: excursion = await GetExcursionByID(Number.parseInt(id));

    return (
        <section className="flex flex-col gap-4">
            <h2 className='text-2xl font-semibold'>Editando Excursión</h2>
            <EditExcursion
                departureLocation={excursionData.departureLocation}
                arrivalLocation={excursionData.arrivalLocation}
                departureDate={excursionData.departureDate}
                arrivalDate={excursionData.arrivalDate}
                departureTime={excursionData.departureTime}
                arrivalTime={excursionData.arrivalTime}
                hotelID={excursionData.hotelID}
                price={excursionData.price}
                id={excursionData.id}
            />
        </section>
    );
}
