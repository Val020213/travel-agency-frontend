import { FacilitiesTable } from "@/components/app/admin/facilities/FacilitiesTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Search from "@/components/ui/admin/searchBar";
import { FetchFacilitiesPages } from "@/lib/data/data";
import Pagination from "@/components/ui/admin/pagination";

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
    const totalPages = await FetchFacilitiesPages(query); 

    return (
        <section className="flex flex-col gap-4 md:gap-12 lg:gap-16">
            <Search placeholder="Buscar Facilidades..." />
            <Suspense fallback={<div>Cargando Facilidades...</div>}>
                <FacilitiesTable query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
            <Link href="/admin/facilities/create">
                <Button variant='outline'><p>Crear una nueva Facilidad en <span className="text-orange-500">Travelix</span></p></Button>
            </Link>
            <div className="flex flex-col gap-4">
                <h2 className='text-2xl font-semibold'>Facilidades</h2>
                <div>
                    <p>En esta sección puedes ver todas las facilidades registradas en Travelix.</p>
                    <p>Desde aquí puedes editar o eliminar una facilidad.</p>
                    <p>También puedes crear una nueva facilidad.</p>
                </div>
            </div>
        </section>
    )
}
