'use client';
import { FetchTourists } from '@/libs/data';
import { tourist } from '@/libs/definitions';
import { Tourist } from '@/ui/tmp/tourist';
import { useState, useEffect } from 'react';
import { InfoCard } from '@/ui/cards/InfoCard';
import { Logo } from '@/ui/layout/Logo';
import { CategoryCard } from '@/ui/cards/CategoryCard';

export default function Home() {
  // const [touristData, setTouristData] = useState<tourist[]>([]);
  // useEffect(() => {
  //   FetchTourists().then((data) => {
  //     setTouristData(data);
  //   });
  // }, []);

  return (
    <>
      <h1>Home</h1>
      <button className='rounded-lg bg-blue-500 text-white p-4 w-fit h-fit'>
        Reload Here!!!
      </button>
      {/* <div className='flex flex-wrap items-start h-full w-full gap-8 *:border *:border-gray-200 *:dark:border-gray-700'>
        {touristData.map((tourist: tourist, index: number) => {
          return <Tourist key={index} tourist={tourist} />;
        })}
      </div> */}
      <InfoCard
        name='Hotel Iberostar Grand Packard'
        address='Paseo de Prado y Capdevila, Parque de los Enamorados, La Habana, Cuba'
        phone='55591702'
      />
      <div className='este div es fantasma h-24' />
      <CategoryCard categoryType={2} />
      <CategoryCard categoryType={1} />
      <CategoryCard categoryType={3} />
      <CategoryCard categoryType={4} />
    </>
  );
}
