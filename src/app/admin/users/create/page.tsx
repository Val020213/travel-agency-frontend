import { CreateUser } from "@/components/app/admin/users/CreateUser";

export default function Page() {
    return (
        <section>
            <h2 className="text-2xl font-semibold">Creando Usuario</h2>
            <CreateUser />
        </section>
    );
}
