import {
  GetAgencyByID,
  GetExcursionByID,
  GetFacilitiesByPackageId,
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
import {
  IconCalendar,
  IconMapPin,
  IconMapPin2,
  IconStarFilled,
} from '@tabler/icons-react';
import { AgencyInfoCard } from '../agencies/AgencyInfoCard';
import { facility } from '@/lib/entities';

function FixDateFormate(date: string) {
  return date.split('T')[0];
}

function FixTimeFormate(time: string) {
  return time.split('.')[0];
}

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
  const facilities : facility[] = await GetFacilitiesByPackageId(touristPackage?.id);

  return (
    <div className='flex flex-col gap-8 items-start justify-start text-gray-800 dark:text-extends-darker-blue-200'>
      <Image
        alt='product image'
        quality={100}
        width={600}
        height={600}
        className='rounded-2xl w-screen h-[600px]'
        src={touristPackage?.image ?? require('@/assets/defaultImage.png')}
      />
      <div className='flex flex-col gap-8 text-xl'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-2'>
            <p className='text-3xl'>Descripción</p>
            <p className='text-gray-500 dark:text-extends-darker-blue-300'>
              {touristPackage?.description}
            </p>
          </div>
          <div className='flex flex-row gap-2'>
            <p>Duración: </p>
            <p className='text-gray-500 dark:text-extends-darker-blue-300'>
              {touristPackage?.duration} días
            </p>
          </div>

          <div className='flex flex-row gap-2'>
            <p>Precio:</p>
            <p className='text-gray-500 dark:text-extends-darker-blue-300'>
              {touristPackage?.price} cup
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl'>Hoteles asociados</h2>
          <Carousel className='w-full'>
            <CarouselContent>
              {hotels.map((hotel, index) => (
                <CarouselItem key={index} className='flex flex-col gap-3'>
                  <Image
                    src={
                      extendedExcursion.image ??
                      require('@/assets/defaultImage.png')
                    }
                    alt='foto del hotel'
                    quality={100}
                    height={600}
                    width={600}
                    className='rounded-2xl w-screen h-[600px]'
                  />
                  <p className='text-2xl font-medium'>Hotel {hotel.name}</p>
                  <div className='flex flex-col gap-2 text-gray-500 dark:text-extends-darker-blue-300'>
                    <p className='flex flex-row gap-1'>
                      <IconMapPin size={24} stroke={1.5} /> {hotel.address}
                    </p>
                    <p className='flex flex-row gap-1'>
                      {Array.from({ length: hotel.category as number }).map(
                        (_, index) => (
                          <IconStarFilled
                            key={index}
                            size={24}
                            stroke={1.5}
                            className='text-yellow-400'
                          />
                        )
                      )}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-3xl text-gray-800 dark:text-extends-darker-blue-200'>
            Datos de la Excursión
          </h2>
          <Image
            src={
              extendedExcursion.image ?? require('@/assets/defaultImage.png')
            }
            alt='foto del hotel'
            quality={100}
            height={600}
            width={600}
            className='rounded-2xl w-screen h-[600px]'
          />

          <div className='flex flex-col gap-1'>
            Horario de Llegada
            <div className='flex flex-row gap-2 text-gray-500 dark:text-extends-darker-blue-300'>
              <IconCalendar size={24} stroke={1.5} />
              <div className='flex flex-row gap-1'>
                <p>{FixDateFormate(extendedExcursion.arrivalDate)}</p>
                <p>{FixTimeFormate(extendedExcursion.arrivalTime)}</p>
              </div>
            </div>
            <div className='flex flex-row gap-2 text-gray-500 dark:text-extends-darker-blue-300'>
              <IconMapPin2 size={24} stroke={1.5} />
              <p>{extendedExcursion.arrivalLocation}</p>
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            Horario de Salida
            <div className='flex flex-row gap-2 text-gray-500 dark:text-extends-darker-blue-300'>
              <IconCalendar size={24} stroke={1.5} />
              <div className='flex flex-row gap-1'>
                <p>{FixDateFormate(extendedExcursion.departureDate)}</p>
                <p>{FixTimeFormate(extendedExcursion.departureTime)}</p>
              </div>
            </div>
            <div className='flex flex-row gap-2  text-gray-500 dark:text-extends-darker-blue-300'>
              <IconMapPin2 size={24} stroke={1.5} />
              <p>{extendedExcursion.departureLocation}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h2 className='text-3xl text-gray-800 dark:text-extends-darker-blue-200'>
                Agencia Asociada
            </h2>
            <AgencyInfoCard agency={agencyInfo} className={'w-screen'} />
        </div>
        {facilities.length > 0 && (
        <div className='flex flex-col gap-4'>
            <h2 className='text-3xl text-gray-800 dark:text-extends-darker-blue-200'>
                Facilidades
            </h2>
            {facilities.map((facility, index) => (
                <div key={index} className='flex flex-row gap-2'>
                    <p>{facility.description}</p>
                </div>
            ))}
        </div>)}
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
      <h2 className='text-3xl text-gray-800 dark:text-extends-darker-blue-200'>
        Datos de la Reservación{' '}
      </h2>
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
