'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DeleteSession() {
    await cookies().delete('session');
    redirect('/')
}