import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
    return (
        <section className="flex flex-col gap-4 md:gap-12 lg:gap-16">
            <div className="flex flex-col gap-4">
                <h2 className='text-2xl font-semibold'>Usuarios en Travelix</h2>
                <div>
                    <p>En esta sección puedes ver todos los usuarios que están registrados en Travelix.</p>
                    <p>Desde aquí puedes editar o eliminar usuario.</p>
                    <p>También puedes crear un nuevo usuario.</p>
                </div>
            </div>
            <Link href="/admin/agencies/create">
                <Button variant='outline'><p>Crear un nuevo usuario en <span className="text-orange-500">Travelix</span></p></Button>
            </Link>
            <Suspense fallback={<div>Cargando usuarios ...</div>}>
                {/* <HotelsTable /> */}
            </Suspense>

        </section >
    )
}