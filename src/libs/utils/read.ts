'use client'
export function read(): Record<string, string>  {
    // @ts-ignore 
    const cookieData = document?.cookie;
    if (cookieData) {
        return JSON.parse(cookieData);
    } else {
        return {};
    }
}