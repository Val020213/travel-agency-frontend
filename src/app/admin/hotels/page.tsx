import { HotelsTable } from "@/components/app/admin/hotels/HotelsTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Search from "@/components/ui/admin/searchBar";
import { FetchHotelsPages } from "@/lib/data/data";
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
 const totalPages = await FetchHotelsPages(query);

 return (
    <section className="flex flex-col gap-4 md:gap-12 lg:gap-16">
      <Search placeholder="Buscar Hoteles..." />
      <Suspense fallback={<div>Cargando Hoteles ...</div>}>
        <HotelsTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
      <Link href="/admin/hotels/create">
        <Button variant='outline'><p>Crear un nuevo Hotel en <span className="text-orange-500">Travelix</span></p></Button>
      </Link>
      <div className="flex flex-col gap-4">
        <h2 className='text-2xl font-semibold'>Hoteles en Travelix</h2>
        <div>
          <p>En esta sección puedes ver todos los hoteles que están registrados en Travelix.</p>
          <p>Desde aquí puedes editar o eliminar un hotel.</p>
          <p>También puedes crear un nuevo hotel.</p>
        </div>
      </div>
    </section>
 );
}
