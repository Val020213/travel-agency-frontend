import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../tokens/Tag';
import clsx from 'clsx';

type Props = {
  title: string;
  imageSrc: string;
  description: string;
  href: string;
  metaData1: string;
  metaData2: string;
  tag: string;
};

export const ProductCard = ({
  title,
  imageSrc,
  description,
  href,
  metaData1,
  metaData2,
  tag,
}: Props) => {
  return (
    <Link
      href={href}
      className={clsx(
        'rounded-lg shadow-sm',
        'hover:shadow-md hover:scale-105',
        'transition-transform duration-300 ease-in-out',
        'overflow-clip',
        'dark:hover:bg-extends-darker-blue-900'
      )}
    >
      <Image
        alt='product image'
        className='object-cover w-auto h-auto'
        height={600}
        width={800}
        src={imageSrc}
        style={{
          aspectRatio: '800/600',
          objectFit: 'cover',
        }}
      />
      <div className='grid gap-2 p-4'>
        <div className='flex flex-row items-center justify-between'>
          <h3 className='font-semibold text-xl line-clamp-1'>{title}</h3>
          {tag && <Tag text={tag} className='h-8' />}
        </div>
        <p className='text-sm text-gray-500 dark:text-gray-400 line-clamp-3'>
          {description}
        </p>
        <div className='flex flex-row font-medium text-lg gap-0.5'>
          <h4>{metaData1}</h4>
          <h4 className='text-[#DB115A]'>{metaData2}</h4>
        </div>
      </div>
    </Link>
  );
};
