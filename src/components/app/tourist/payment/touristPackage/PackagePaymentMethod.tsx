import { GetPackagesByID } from "@/lib/data/data";
import { PaymentMethod } from "../paymentMethod";

export async function PackagePayment({ packageID }: { packageID: number }) {
    const touristPackage = await GetPackagesByID(packageID)
    return (
        <PaymentMethod text="Paquete turístico" price={touristPackage?.price} />
    )
}