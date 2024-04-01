'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { GetHotelsByExcursionID } from '@/lib/data/data';

import {
  IconMapPin,
  IconStarFilled,
} from '@tabler/icons-react';
import Image from 'next/image';



export async function HotelInformation({ id }: { id: number }) {
  const hotels = await GetHotelsByExcursionID(id);

  if (!hotels || hotels.length < 1) {
    return
  }

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-3xl'>Hoteles asociados</h2>
      <Carousel className='min-w-full'>
        <CarouselContent>
          {hotels.map((hotel, index) => (
            <CarouselItem key={index} className='flex flex-col gap-3'>
              <Image
                src={
                  hotel.image ??
                  require('@/assets/defaultImage.png')
                }
                alt='hotel image'
                quality={100}
                width={600}
                height={600}
                className='rounded-2xl w-[1200px] h-[600px]'
              />
              <p className='text-2xl font-medium'>{hotel.name}</p>
              <div className='flex flex-col gap-2 text-gray-500 dark:text-extends-darker-blue-300'>
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
                <p className='flex flex-row gap-1'>
                  <IconMapPin size={24} stroke={1.5} /> {hotel.address}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
