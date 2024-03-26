import { IconTrash } from "@tabler/icons-react";
export function Delete({ id, serverAction }: { id: number, serverAction: (id: number) => Promise<void> }) {
    const DeleteWithId = serverAction.bind(null, id);
    return (
        <form onSubmit={DeleteWithId}>
            <button type="submit"><IconTrash size={24} /></button>
        </form>
    );
}   