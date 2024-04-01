import { AgencyOffersPage } from "@/components/app/tourist/agencies/agencyOffersPage";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className='flex flex-col gap-8 md:gap-16 lg-gap-24 py-4'>
      <AgencyOffersPage agencyID={parseInt(params.id)} />
    </div>
  );
}
