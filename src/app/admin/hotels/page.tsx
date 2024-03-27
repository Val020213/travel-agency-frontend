import { HotelsTable } from "@/components/app/admin/hotels/HotelsTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
    return (
        <section className="flex flex-col gap-4 md:gap-12 lg:gap-16">
            <div className="flex flex-col gap-4">
                <h2 className='text-2xl font-semibold'>Hoteles en Travelix</h2>
                <div>
                    <p>En esta sección puedes ver todas los usuarios que están registrados en Travelix.</p>
                    <p>Desde aquí puedes editar o eliminar un hotel.</p>
                    <p>También puedes crear un nuevo hotel.</p>
                </div>
            </div>
            <Link href="/admin/agencies/create">
                <Button variant='outline'><p>Crear un nuevo hotel en <span className="text-orange-500">Travelix</span></p></Button>
            </Link>
            <Suspense fallback={<div>Cargando Hoteles ...</div>}>
                {/* <HotelsTable /> */}
            </Suspense>

        </section >
    )
}