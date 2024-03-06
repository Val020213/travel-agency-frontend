import Image from 'next/image';

export type CardData = {
  imageSrc: string;
  title: string;
  description: string;
  href: string;
  caracterist: number;
  caracteristType: string;
};

export default function Card(cardData: CardData): JSX.Element {
  return (
    <div className='flex flex-col'>
      <Image
        alt='image_not_found'
        src={cardData.imageSrc}
        width={300}
        height={300}
        className='w-full'
      />
      <div className='flex flex-col pt-2 pb-4 *:leading-7'>
        <div className='text-xl text-gray-800 dark:text-gray-50 line-clamp-2'>
          {cardData.title}
        </div>
        <div className='text-lg line-clamp-3 text-gray-500 dark:to-extends-darker-blue-300'>
          {cardData.description}
        </div>
        <div className='text-lg text-gray-500 dark:text-gray-300'>
          {cardData.caracterist}
          <span className='text-[#DB115A]'> {cardData.caracteristType}</span>
        </div>
      </div>
    </div>
  );
}

const CardFactory = {};
