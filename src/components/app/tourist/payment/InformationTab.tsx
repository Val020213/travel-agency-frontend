
import { GetAgencyByID, GetExcursionByID, GetHotelsByExcursionID, GetPackagesByID } from "@/lib/data/data"
import { Suspense } from "react"
import Image from "next/image"

async function ExcusionInformationTab({ id }: { id: number }) {
    const excursion = await GetExcursionByID(id)
    console.log(excursion)
    return (
        <div>
            {'excursion'}
        </div>
    )
}

async function TouristPackageInformationTab({ id }: { id: number }) {
    const touristPackage = await GetPackagesByID(id)
    const agencyInfo = await GetAgencyByID(touristPackage?.agency_id)
    const extendedExcursion = await GetExcursionByID(touristPackage?.extended_excursion_id)
    const hotels = await GetHotelsByExcursionID(extendedExcursion.id)

    console.log(touristPackage)
    return (
        <div className="flex flex-col gap-4 items-start justify-start">
            <h3 className="">Paquete de {touristPackage?.duration} días</h3>
            <Image
                alt='product image'
                height={600}
                width={800}
                quality={100}
                src={touristPackage?.image ?? require('@/assets/defaultImage.png')}
                style={{
                    aspectRatio: '800/600',
                }}
            />

        </div>
    )
}

export async function InformationAction({ type, id }: { type: string, id: number }) {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-3xl">Datos de la Reservación </h2>
            {type === 'excursion' ?
                <Suspense>
                    <ExcusionInformationTab id={id} />
                </Suspense> :
                <Suspense>
                    <TouristPackageInformationTab id={id} />
                </Suspense>
            }
        </div>
    )
}