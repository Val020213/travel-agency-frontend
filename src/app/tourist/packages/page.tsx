import { PackageProducts } from "@/components/app/tourist/packages/PackageProducts";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className='flex flex-col gap-8 md:gap-16 lg-gap-24 py-4'>
      <Suspense fallback={<div>Loading...</div>}>
        <PackageProducts />
      </Suspense>
    </div>
  )
}
