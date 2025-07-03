export const getCookies = (name: string) => {
    let cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split('=');
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
};

export function deleteAndReassignId<T extends { id: number }>(
    array: T[],
    indexToDelete: number
): T[] {
    const filtered = array.filter((_, index) => index !== indexToDelete);

    return filtered.map((item, index) => ({
        ...item,
        id: index + 1,
    }));
}