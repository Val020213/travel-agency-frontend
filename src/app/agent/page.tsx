import { AgencyOffersPage } from "@/components/app/tourist/agencies/agencyOffersPage";
import { FetchUser, GetAgentByUserID } from "@/lib/data/data";
import { db } from "@/lib/utils";
import { Suspense } from "react";

export default async function Page() {
  const user = await FetchUser();
  const completeUser = await GetAgentByUserID(user?.id ?? 0);
  const agencyID = completeUser?.agencyID;

  return (
    <div className='flex flex-col gap-8 md:gap-16 lg-gap-24 py-4'>
      <Suspense>
      <AgencyOffersPage agencyID={agencyID ?? 0} />
      </Suspense>
    </div>
  );
}
