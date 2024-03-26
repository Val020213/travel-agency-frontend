'use server'

import { cookies } from "next/headers"

export async function ReadSession(): Promise<string> {
    const myCookies = cookies().get('session')
    return myCookies?.value ?? '';
}
