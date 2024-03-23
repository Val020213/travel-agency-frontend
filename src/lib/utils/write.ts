export function write(data: Record<string, string>) {
    document.cookie = 'session=' + (JSON.stringify(data)).toString();
}
