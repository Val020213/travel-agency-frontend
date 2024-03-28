import { ExcursionsTable } from "@/components/app/admin/excursions/ExcursionsTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Search from "@/components/ui/admin/searchBar";
import { FetchExcursionsPages } from "@/lib/data/data";
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
 const totalPages = await FetchExcursionsPages(query);

 return (
    <section className="flex flex-col gap-4 md:gap-12 lg:gap-16">
      <Search placeholder="Buscar Excursiones..." />
      <Suspense fallback={<div>Cargando Excursiones ...</div>}>
        <ExcursionsTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
      <Link href="/admin/excursions/create">
        <Button variant='outline'><p>Crear una nueva Excursión en <span className="text-orange-500">Travelix</span></p></Button>
      </Link>
      <div className="flex flex-col gap-4">
        <h2 className='text-2xl font-semibold'>Excursiones en Travelix</h2>
        <div>
          <p>En esta sección puedes ver todas las excursiones que están registradas en Travelix.</p>
          <p>Desde aquí puedes editar o eliminar una excursión.</p>
          <p>También puedes crear una nueva excursión.</p>
        </div>
      </div>
    </section>
 );
}
