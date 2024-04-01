import { GetExcursionByID, GetPackagesByID } from "@/lib/data/data";
import { PaymentMethod } from "../paymentMethod";

export async function PackagePayment({ packageID }: { packageID: number }) {
    const touristPackage = await GetPackagesByID(packageID)
    return (
        <PaymentMethod text="Paquete turístico" price={touristPackage?.price} />
    )
}

export async function ExcursionPayment({ excursionID }: { excursionID: number }) {
    const excursion = await GetExcursionByID(excursionID)
    return (
        <PaymentMethod text='Excursión' price={excursion?.price} />
    )
}