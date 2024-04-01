import { UsersTable } from "@/components/app/admin/users/UsersTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Search from "@/components/ui/admin/searchBar";
import { FetchUsersPages } from "@/lib/data/data";
import Pagination from "@/components/ui/admin/pagination";
import { AgentTable } from "@/components/app/marketing/agent/AgentTable";
import { FetchTotalAgentsInAgency } from "@/lib/actions/marketing/marketing";

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
    const totalPages = await FetchTotalAgentsInAgency(); 
 
    return (
        <section className="flex flex-col gap-4 md:gap-12 lg:gap-16">
            <Search placeholder="Buscar Agentes..." />
            <Suspense fallback={<div>Cargando Agentes ...</div>}>
                <AgentTable query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
            <Link href="/marketing/agents/create">
                <Button variant='outline'><p>Crear un nuevo Agente en <span className="text-orange-500">Travelix</span></p></Button>
            </Link>
            <div className="flex flex-col gap-4">
                <h2 className='text-2xl font-semibold'>Agentes en Travelix</h2>
                <div>
                    <p>En esta sección puedes ver todos los Agentes que están registrados en Travelix.</p>
                    <p>Desde aquí puedes editar o eliminar un usuario.</p>
                    <p>También puedes crear un nuevo usuario.</p>
                </div>
            </div>
        </section >
    )
}

