import { Suspense } from "react";
import Pagination from "@/components/ui/admin/pagination";
import ExtendedWeekendsTable from "@/components/app/marketing/overview/ExtendedWeekends";
import { FetchExtendedExcursionsPages } from "@/lib/actions/marketing/marketing";

export default async function Page({
 searchParams,
}: {
 searchParams?: {
    query?: string;
    page?: string;
 };
}) {
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = (await FetchExtendedExcursionsPages('', currentPage)); 
 
    return (
        <section className="flex flex-col gap-4 md:gap-12 lg:gap-16">
            <Suspense fallback={<div>Cargando Excursiones extendidas ...</div>}>
                <ExtendedWeekendsTable query={''} currentPage={currentPage}/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </section >
    )
}

