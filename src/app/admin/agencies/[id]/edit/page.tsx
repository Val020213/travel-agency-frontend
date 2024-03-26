import { EditAgency } from "@/components/app/admin/agencies/EditAgency";
import {  GetAgencyByID } from "@/lib/data/data";
import { agency } from "@/lib/entities";


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const agency : agency = await GetAgencyByID(Number.parseInt(id));

    return (
        <section className="flex flex-col gap-4">
            <h2 className='text-2xl font-semibold'>Editando Agencia</h2>
        <EditAgency name={agency.name} address={agency.address} id={agency.id} email={agency.email} fax={agency.fax} />
        </section>
    )
}