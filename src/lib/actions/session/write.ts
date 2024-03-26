import { cookies } from "next/headers";

export async function write(data: Record<string, string>) {
    await cookies().set('session', (JSON.stringify(data)).toString())
}
