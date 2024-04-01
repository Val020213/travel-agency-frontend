import { AgencyProducts } from "@/components/app/tourist/agencies/AgencyProducts";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className='flex flex-col gap-8 md:gap-16 lg-gap-24 py-4'>
      <Suspense fallback={<div>Loading...</div>}>
        <AgencyProducts />
      </Suspense>
    </div>
  );
}
