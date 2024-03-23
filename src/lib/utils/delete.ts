'use server'
import { cookies } from "next/headers";

export async function DeleteSession() {
    await cookies().delete('session');
}