import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FetchAgentsInAgency } from "@/lib/actions/marketing/marketing";
import { DeleteAgent } from "@/lib/actions/marketing/agent/agent";
import { agent } from "@/lib/entities";
import { IconTrash } from "@tabler/icons-react";

export async function AgentTable({
 query,
 currentPage,
}: {
 query: string;
 currentPage: number;
}) {
    const agents: agent[] = await FetchAgentsInAgency(); 

    function DeleteAction(id: number) {
        return DeleteAgent.bind(null, id);
    }
    
    return (
        <section>
            <h2 className='text-2xl font-semibold'>Agentes en la agencia</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nombre de Usuario</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        agents.map((agents) => (
                            <TableRow key={agents.id}>
                                <TableCell>{agents.username}</TableCell>
                                <TableCell className="flex flex-row gap-1">
                                    <form action={DeleteAction(agents.id)}>
                                        <button type='submit'>
                                            <IconTrash size={24} stroke={1.5}/>
                                        </button>
                                    </form>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </section>
    );
}
