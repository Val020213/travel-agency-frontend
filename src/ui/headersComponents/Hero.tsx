import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '../tokens/Button';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

const heroImages = [
  require('@/ui/assets/hero1.jpg'),
  require('@/ui/assets/hero2.jpg'),
  require('@/ui/assets/hero3.jpg'),
];

const HeroData = [
  {
    title: (
      <p>
        No pierdas la oportunidad <br /> vive tu aventura
      </p>
    ),
    button: (
      <Button
        title='Excursiones'
        icon={<ChevronRightIcon stroke='1.5' />}
        href='/excursions'
      />
    ),
  },
  {
    title: (
      <p>
        Conoce los mejores <br /> destinos
      </p>
    ),
    button: (
      <Button
        title='Paquetes'
        icon={<ChevronRightIcon stroke='1.5' />}
        href='/packages'
      />
    ),
  },
  {
    title: (
      <p>
        Vive la experiencia <br /> de tu vida
      </p>
    ),
    button: (
      <Button
        title='Agencias'
        icon={<ChevronRightIcon stroke='1.5' />}
        href='/agencies'
      />
    ),
  },
];

const darkHeroImages = [
  require('@/ui/assets/darkhero.jpg'),
  require('@/ui/assets/darkhero2.jpg'),
  require('@/ui/assets/darkhero3.jpg'),
];

function GetImages() {
  const { theme } = useTheme();
  return theme === 'dark' ? darkHeroImages : heroImages;
}

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const imagesSrc = GetImages();

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imagesSrc.map((_, index) => (
          <CarouselItem key={index} className='relative h-[560px] w-screen'>
            <Image
              src={imagesSrc[index]}
              alt='hero image'
              objectFit='cover'
              quality={100}
              fill={true}
            />
            <div className='container mx-auto text-lg md:text-2xl'>
              {HeroData[index].title}
              {HeroData[index].button}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute left-1 top-1/2 text-gray-900' />
      <CarouselNext className='absolute right-1 top-1/2 text-gray-900' />
    </Carousel>
  );
}
