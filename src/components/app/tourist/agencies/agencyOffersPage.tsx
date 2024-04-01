import { AgencyExcursionProducts } from './ExcursionsProducts';
import { AgencyPackageProducts } from './PackageProducts';

export function AgencyOffersPage({ agencyID }: { agencyID: number }) {
  return (
    <div className='flex flex-col gap-8 md:gap-16 lg-gap-24 py-4'>
      <AgencyExcursionProducts agency_id={agencyID} />
      <AgencyPackageProducts agency_id={agencyID} />
    </div>
  );
}
