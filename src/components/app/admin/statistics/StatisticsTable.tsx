// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { DeleteAgency } from "@/lib/actions/Admin/agency/agency";
// import { FetchAgencies } from "@/lib/data/data";
// import { agency } from "@/lib/entities";
// import { IconEdit } from "@tabler/icons-react";
// import Link from "next/link";
// import { IconTrash } from "@tabler/icons-react";

// export async function AgenciesTable({
//  query,
//  currentPage,
// }: {
//  query: string;
//  currentPage: number;
// }) {
//     const agencies: agency[] = await FetchAgencies(query, currentPage);

//     function DeleteAction(id: number) {
//         return DeleteAgency.bind(null, id);
//     }
    
//     return (
//         <section>
//             <h2 className='text-2xl font-semibold'>Agencias en Travelix</h2>
//             <Table>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>ID</TableHead>
//                         <TableHead>Nombre de la Agencia</TableHead>
//                         <TableHead>Estadística I</TableHead>
//                         <TableHead>Estadística II</TableHead>
//                         <TableHead>Acciones</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {
//                         agencies.map((agency) => (
//                             <TableRow key={agency.id}>
//                                 <TableCell>{agency.id}</TableCell>
//                                 <TableCell>{agency.name}</TableCell>
//                                 <TableCell>{agency.statisticI}</TableCell>
//                                 <TableCell>{agency.statisticII}</TableCell>
//                                 <TableCell className="flex flex-row gap-1">
//                                     <Link href={`/admin/agencies/${agency.id}/edit`}>
//                                         <IconEdit size={24} stroke={1.5} />
//                                         <span className="sr-only">Edit</span>
//                                     </Link>
//                                     <form action={DeleteAction(agency.id)}>
//                                         <button type='submit'>
//                                             <IconTrash size={24} stroke={1.5}/>
//                                         </button>
//                                     </form>
//                                 </TableCell>
//                             </TableRow>
//                         ))
//                     }
//                 </TableBody>
//             </Table>
//         </section>
//     );
// }
