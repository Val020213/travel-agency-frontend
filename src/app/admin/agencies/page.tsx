import Link from "next/link";

export async function Page() {
    return (
        <section>
            <Link href="/admin/agencies/create">
                <span>Crear una nueva Agencia en <span className="text-orange-500">Travelix</span></span>
            </Link>
        </section>
    )
}