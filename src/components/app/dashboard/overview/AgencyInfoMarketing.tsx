import { agency } from '@/lib/entities';
import { AgencyInfoCard } from '../../tourist/agencies/AgencyInfoCard';
import { AgencyHero } from './AgencyHero';

export function AgencyInfoMarketing({ agency }: { agency: agency }) {
  return (
    <>
      <div className='absolute top-0 left-0'>
        <span className='relative'>
          <AgencyHero agency={agency} />
          <span className='transform flex justify-center items-center -translate-y-16 md:-translate-y-36'>
            <AgencyInfoCard agency={agency} />
          </span>
        </span>
      </div>
      <div className='h-[280px] sm:h-[500px] md:h-[620px] lg:h-[680px]'></div>
    </>
  );
}
