import { agency } from '@/lib/entities';
import { fixPath } from '@/lib/utils';
import Image from 'next/image';

export function AgencyHero({ agency }: { agency: agency }) {
  return (
    <div className='relative h-[280px] sm:h-[500px] md:h-[620px] lg:h-[680px] w-screen'>
      <Image
        src={fixPath(agency.image)}
        alt={agency.image}
        quality={100}
        layout='fill'
        fill={true}
        priority
      />
    </div>
  );
}
