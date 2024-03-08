import Image from 'next/image';
import clsx from 'clsx';
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
import { ChevronRightIcon } from '@radix-ui/react-icons';

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

type heroImages = (typeof heroImages)[number];

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
    title: <p>Conoce los mejores destinos</p>,
    button: (
      <Button
        title='Paquetes'
        icon={<ChevronRightIcon stroke='1.5' />}
        href='/packages'
      />
    ),
  },
  {
    title: <p>Vive la experiencia de tu vida</p>,
    button: (
      <Button
        title='Agencias'
        icon={<ChevronRightIcon stroke='1.5' />}
        href='/agencies'
      />
    ),
  },
];

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const [imagesSrc, setImagesSrc] = React.useState<heroImages[]>([]);
  const { theme } = useTheme();

  React.useEffect(() => {
    if (theme === 'dark') {
      setImagesSrc(darkHeroImages);
    } else {
      setImagesSrc(heroImages);
    }
  }, [theme]);

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
            <div
              className={clsx(
                'container mx-4 sm:mx-12 md:mx-24 lg:mx-32',
                'flex flex-col gap-6 justify-center items-start',
                'z-10 fixed top-1/3 w-auto py-4',
                'dark:bg-gradient-radial dark:from-black/90 dark:via-black/10 dark:to-transparent'
              )}
            >
              <span className='text-white font-bold text-2xl md:text-4xl whitespace-nowrap'>
                {HeroData[index].title}
              </span>
              {HeroData[index].button}
            </div>
            <Image
              src={imagesSrc[index]}
              alt='hero image'
              objectFit='cover'
              quality={100}
              layout='fill'
              fill={true}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute left-1 top-1/2 text-gray-900' />
      <CarouselNext className='absolute right-1 top-1/2 text-gray-900' />
    </Carousel>
  );
}
