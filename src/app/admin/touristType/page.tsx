import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Search from "@/components/ui/admin/searchBar";
import { FetchTouristTypePage } from "@/lib/data/data";
import Pagination from "@/components/ui/admin/pagination";
import { TouristTypeTable } from "@/components/app/admin/touristType/TouristTypeTable";

export default async function Page({
 searchParams,
}: {
 searchParams?: {
    query?: string;
    page?: string;
 };
}) {
     const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await FetchTouristTypePage(query); 
 
    return (
        <section className="flex flex-col gap-4 md:gap-12 lg:gap-16">
            <Search placeholder="Buscar tipo de turista..." />
            <Suspense fallback={<div>Cargando Tipo de Turistas ...</div>}>
                <TouristTypeTable query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
            <Link href="/admin/touristType/create">
                <Button variant='outline'><p>Crear un nuevo tipo de turista<span className="text-orange-500">Travelix</span></p></Button>
            </Link>
            <div className="flex flex-col gap-4">
                <h2 className='text-2xl font-semibold'>Tipos de Turista en Travelix</h2>
                <div>
                    <p>En esta sección puedes ver todos los tipos de turistas que están creados en Travelix.</p>
                    <p>Desde aquí puedes editar o eliminar un tipo de turista.</p>
                    <p>También puedes crear un nuevo tipo de turista.</p>
                </div>
            </div>
        </section >
    )
}
