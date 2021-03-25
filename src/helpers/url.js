export function replaceBaseApiUrl(old, targetApiUrl) {
    let newUrl = new URL(old);
    let targetUrl = new URL(targetApiUrl);

    newUrl.protocol = targetUrl.protocol;
    newUrl.hostname = targetUrl.hostname;
    newUrl.port = targetUrl.port;
    newUrl.pathname = targetUrl.pathname + newUrl.pathname;

    return newUrl.href;
}