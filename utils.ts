export const urlFromParams = (key: string, val: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has(key)) {
        searchParams.set(key, val);
    } else {
        searchParams.append(key, val);
    }
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    return newUrl;
}
export const formateDate = (date: string) => {
    const dateObject = new Date(date);
    const result = dateObject.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    return result;
}