import { useState, useEffect } from 'react';

export function Read(): Record<string, string>  {
    const [cookieData, setCookieData] = useState<Record<string, string>>({});
    useEffect(() => {
        const cookies = document?.cookie;
        if (cookies) {
            setCookieData(JSON.parse(cookies));
        }
    }, []);

    return cookieData;
}