import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Search from "@/components/ui/admin/searchBar";
import Pagination from "@/components/ui/admin/pagination";
import { AgenciePackageTable } from "@/components/app/marketing/packages/AgenciePackageTable";
import { FetchPackagesPagesInAgencies } from "@/lib/actions/marketing/marketing";

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
 const totalPages = await FetchPackagesPagesInAgencies(query); //! el total de paginas aqui

 return (
    <section className="flex flex-col gap-4 md:gap-12 lg:gap-16">
      <Search placeholder="Buscar Paquetes..." />
      <Suspense fallback={<div>Cargando Paquetes ...</div>}>
        <AgenciePackageTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
      <Link href="/marketing/packages/create">
        <Button variant='outline'><p>Crear un nuevo Paquete en <span className="text-orange-500">Agencia</span></p></Button>
      </Link>
      <div className="flex flex-col gap-4">
        <h2 className='text-2xl font-semibold'>Paquetes en la Agencia</h2>
        <div>
          <p>En esta sección puedes ver todos los paquetes que están registrados en la agencia.</p>
          <p>Desde aquí puedes editar o eliminar un paquete.</p>
          <p>También puedes crear un nuevo paquete.</p>
        </div>
      </div>
    </section>
 );
}
