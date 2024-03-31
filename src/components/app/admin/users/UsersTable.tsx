import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DeleteUser } from "@/lib/actions/Admin/user/user";
import { FetchUsers } from "@/lib/data/data";
import { user } from "@/lib/entities";
import { IconTrash } from "@tabler/icons-react";

export async function UsersTable({
 query,
 currentPage,
}: {
 query: string;
 currentPage: number;
}) {
    const users: user[] = await FetchUsers(query, currentPage);

    function DeleteAction(id: number) {
        return DeleteUser.bind(null, id);
    }
    
    return (
        <section>
            <h2 className='text-2xl font-semibold'>Usuarios en Travelix</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nombre de Usuario</TableHead>
                        <TableHead>Rol</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.rol}</TableCell>
                                <TableCell className="flex flex-row gap-1">
                                    <form action={DeleteAction(user.id)}>
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
