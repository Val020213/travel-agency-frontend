'use client';
import { GetExcursionByID } from '@/lib/data/data';
import { excursion } from '@/lib/entities';
import { db, FixDateFormate, fixPath, FixTimeFormate } from '@/lib/utils';
import { IconCalendar, IconMapPin2 } from '@tabler/icons-react';
import Image from 'next/image';
import { HotelInformation } from './touristPackage/HotelInformation';

export async function ExcusionInformationTab({ id }: { id: number }) {
  const excursion: excursion = await GetExcursionByID(id);
  db(excursion.image)

  return (
    <div className='flex flex-col gap-10'>
      <h2 className='text-3xl text-gray-800 dark:text-extends-darker-blue-200'>
        Datos de la Excursión
      </h2>
      <Image
        src={
          fixPath(excursion.image)
        }
        alt='foto de la excursion'
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
            <p>{FixDateFormate(excursion.arrivalDate)}</p>
            <p>{FixTimeFormate(excursion.arrivalTime)}</p>
          </div>
        </div>
        <div className='flex flex-row gap-2 text-gray-500 dark:text-extends-darker-blue-300'>
          <IconMapPin2 size={24} stroke={1.5} />
          <p>{excursion.arrivalLocation}</p>
        </div>
      </div>

      <div className='flex flex-col gap-1'>
        Horario de Salida
        <div className='flex flex-row gap-2 text-gray-500 dark:text-extends-darker-blue-300'>
          <IconCalendar size={24} stroke={1.5} />
          <div className='flex flex-row gap-1'>
            <p>{FixDateFormate(excursion.departureDate)}</p>
            <p>{FixTimeFormate(excursion.departureTime)}</p>
          </div>
        </div>
        <div className='flex flex-row gap-2  text-gray-500 dark:text-extends-darker-blue-300'>
          <IconMapPin2 size={24} stroke={1.5} />
          <p>{excursion.departureLocation}</p>
        </div>
      </div>

      <HotelInformation id={excursion.id} />
    </div>
  );
}
