'use client'
import { useEffect } from 'react';

export function Read(): Record<string, string> {
    useEffect(() => {
        const cookies = document?.cookie;
        if (cookies) {
            try {
                return JSON.parse(cookies);
            }
            catch {
                document.cookie = ''
            }
        }
    }, []);

    return {};
}