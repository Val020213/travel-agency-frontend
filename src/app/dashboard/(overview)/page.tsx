import { AgencyInfoMarketing } from '@/components/app/dashboard/overview/AgencyInfoMarketing';
import { FetchMarketingAgency } from '@/lib/data/data';
import { AgencyPrimaryData } from '@/components/app/dashboard/overview/AgencyPrimaryData';
import { FrequentlyTouristTable } from '@/components/app/dashboard/overview/FrequentlyTouristTable';
import { ExpensivePackages } from '@/components/app/dashboard/overview/ExpensivePackages';

export default async function Page() {
  const agency = await FetchMarketingAgency();

  return (
    <div className='flex flex-col gap-4 sm:gap-8'>
      <AgencyInfoMarketing agency={agency} />
      <AgencyPrimaryData agency={agency} />
      <FrequentlyTouristTable agencyID={agency.id} />
      <ExpensivePackages agencyID={agency.id} />
    </div>
  );
}
