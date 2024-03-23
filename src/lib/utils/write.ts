export function write(data: Record<string, string>) {
    document.cookie = JSON.stringify(data)
}
