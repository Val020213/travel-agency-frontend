import {
  GetAgencyByID,
  GetExcursionByID,
  GetFacilitiesByPackageId,
  GetPackagesByID,
} from '@/lib/data/data';
import Image from 'next/image';

import { IconCalendar, IconMapPin2 } from '@tabler/icons-react';
import { AgencyInfoCard } from '../../agencies/AgencyInfoCard';
import { facility } from '@/lib/entities';
import { FixDateFormate, FixTimeFormate } from '@/lib/utils';
import { HotelInformation } from './HotelInformation';

export async function TouristPackageInformationTab({ id }: { id: number }) {
  const touristPackage = await GetPackagesByID(id);
  const agencyInfo = await GetAgencyByID(touristPackage?.agency_id);
  const extendedExcursion = await GetExcursionByID(
    touristPackage?.extended_excursion_id
  );

  const facilities: facility[] = await GetFacilitiesByPackageId(
    touristPackage?.id
  );

  return (
    <div className='flex flex-col gap-10'>
      <h2 className='text-3xl text-gray-800 dark:text-extends-darker-blue-200'>
        Datos de la Reservación{' '}
      </h2>
      <div className='flex flex-col gap-16 items-start justify-start text-gray-800 dark:text-extends-darker-blue-200'>
        <div className='flex flex-col gap-8 text-xl'>
          <Image
            alt='product image'
            quality={100}
            width={600}
            height={600}
            className='rounded-2xl w-[1200px] h-[600px]'
            src={touristPackage?.image ?? require('@/assets/defaultImage.png')}
          />
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
          <HotelInformation id={Number(extendedExcursion.id)} />
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
              className='rounded-2xl w-[1200px] h-[600px]'
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
                <div key={index} className='w-fit rounded-full dark:text-white p-2 bg-blue-50 shadow-md dark:bg-blue-500'>
                  <p>{facility.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
