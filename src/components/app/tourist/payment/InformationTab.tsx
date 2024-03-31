import {
    GetAgencyByID,
    GetExcursionByID,
    GetHotelsByExcursionID,
    GetPackagesByID,
} from '@/lib/data/data';
import { Suspense } from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { IconCalendar, IconMapPin, IconMapPin2 } from '@tabler/icons-react';

async function ExcusionInformationTab({ id }: { id: number }) {
    const excursion = await GetExcursionByID(id);
    console.log(excursion);
    return <div>{'excursion'}</div>;
}

async function TouristPackageInformationTab({ id }: { id: number }) {
    const touristPackage = await GetPackagesByID(id);
    const agencyInfo = await GetAgencyByID(touristPackage?.agency_id);
    const extendedExcursion = await GetExcursionByID(
        touristPackage?.extended_excursion_id
    );
    const hotels = await GetHotelsByExcursionID(extendedExcursion.id);

    return (
        <div className='flex flex-col gap-8 items-start justify-start'>
            <Image
                alt='product image'
                quality={100}
                className='rounded-2xl w-screen h-[600px]'
                src={touristPackage?.image ?? require('@/assets/defaultImage.png')}
            />
            <div className='flex flex-col gap-4 text-2xl'>
                <div className='flex flex-col gap-2 '>
                    <p>Descripción</p>
                    <p className='text-gray-500 dark:text-gray-300'>
                        {touristPackage?.description}
                    </p>
                </div>
                <div className='flex flex-row gap-2'>
                    <p>La travesía tiene una duración de </p>
                    <p className='text-gray-500 dark:text-gray-300'>
                        {touristPackage?.duration} días
                    </p>
                </div>

                <div className='flex flex-row gap-2'>
                    <p>La travesía tiene una duración de </p>
                    <p className='text-gray-500 dark:text-gray-300'>
                        {touristPackage?.duration} días
                    </p>
                </div>
                <h2 className='text-2xl'>Hoteles asosiados</h2>
                <Carousel className='w-full max-w-xs'>
                    <CarouselContent>
                        {hotels.map((hotel, index) => (
                            <CarouselItem key={index}>
                                <div>
                                    <Image
                                        src={hotel.image}
                                        alt='foto del hotel'
                                        quality={100}
                                        className='rounded-2xl w-screen h-[600px]'
                                    />
                                    <p>Hotel {hotel.name}</p>
                                    <p>
                                        <IconMapPin size={24} stroke={1.5} /> {hotel.address}
                                    </p>
                                    <p>{hotel.category}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <p>Datos de la Excursión</p>
                <Image
                    src={extendedExcursion.image}
                    alt='foto del hotel'
                    quality={100}
                    className='rounded-2xl w-screen h-[600px]'
                />

                <div>
                    <div>
                        <IconCalendar size={24} stroke={1.5} />
                        <div>
                            <p>{extendedExcursion.arrivalDate}</p>
                            <p>{extendedExcursion.arrivalTime}</p>
                        </div>
                    </div>
                    <IconMapPin2 size={24} stroke={1.5} />
                    <p>{extendedExcursion.arrivalLocation}</p>
                </div>

                <div>
                    <div>
                        <IconCalendar size={24} stroke={1.5} />
                        <div>
                            <p>{extendedExcursion.departureDate}</p>
                            <p>{extendedExcursion.departureTime}</p>
                        </div>
                    </div>
                    <IconMapPin2 size={24} stroke={1.5} />
                    <p>{extendedExcursion.departureLocation}</p>
                </div>

            </div>
        </div>
    );
}

export async function InformationAction({
    type,
    id,
}: {
    type: string;
    id: number;
}) {
    return (
        <div className='flex flex-col gap-6'>
            <h2 className='text-3xl'>Datos de la Reservación </h2>
            {type === 'excursion' ? (
                <Suspense>
                    <ExcusionInformationTab id={id} />
                </Suspense>
            ) : (
                <Suspense>
                    <TouristPackageInformationTab id={id} />
                </Suspense>
            )}
        </div>
    );
}
