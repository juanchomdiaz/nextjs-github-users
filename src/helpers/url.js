export function replaceHostname(old, target) {
    let newUrl = new URL(old);
    let targetUrl = new URL(target);
    newUrl.hostname = targetUrl.hostname;
    newUrl.protocol = targetUrl.protocol;
    return newUrl.href;
}