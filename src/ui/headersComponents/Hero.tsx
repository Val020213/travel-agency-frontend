import Image from 'next/image';
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

const heroImages = [
  require('@/ui/assets/hero1.jpg'),
  require('@/ui/assets/hero2.jpg'),
  require('@/ui/assets/hero3.jpg'),
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
      className='w-full relative'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imagesSrc.map((_, index) => (
          <CarouselItem key={index}>
            <Image
              src={imagesSrc[index]}
              alt='hero image'
              sizes='100vw'
              layout='responsive'
              style={{
                objectFit: 'cover',
                width: '100%',
                height: 'auto',
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute left-1 top-1/2 text-gray-900' />
      <CarouselNext className='absolute right-1 top-1/2 text-gray-900' />
    </Carousel>
  );
}
