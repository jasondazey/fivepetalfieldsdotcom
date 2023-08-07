export function getMediaUrl(url) {
    const config = useRuntimeConfig()

    // Check if URL is a local path
    if (url.startsWith('/')) {
        // Prepend API address
        return `${config.API_URL}${url}`
    }
    // Otherwise return full URL
    return url
}
