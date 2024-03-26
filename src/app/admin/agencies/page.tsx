import { AgenciesTable } from "@/components/app/admin/agencies/AgenciesTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
    return (
        <section className="flex flex-col gap-4 md:gap-12 lg:gap-16">
            <div className="flex flex-col gap-4">
                <h2 className='text-2xl font-semibold'>Agencias en Travelix</h2>
                <div>
                    <p>En esta sección puedes ver todas las agencias que están registradas en Travelix.</p>
                    <p>Desde aquí puedes editar o eliminar una agencia.</p>
                    <p>También puedes crear una nueva agencia.</p>
                </div>
            </div>
            <Link href="/admin/agencies/create">
                <Button variant='outline'><p>Crear una nueva Agencia en <span className="text-orange-500">Travelix</span></p></Button>
            </Link>
            <Suspense fallback={<div>Cargando Agencias ...</div>}>
                <AgenciesTable />
            </Suspense>

        </section >
    )
}