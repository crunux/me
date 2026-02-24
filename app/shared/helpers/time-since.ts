

export const timeSince = (date: string | Date) => {

    const baseDate = new Date(date)

    const seconds = Math.floor((new Date().getTime() - baseDate.getTime()) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) === 1
            ? Math.floor(interval) + ' year'
            : Math.floor(interval) + ' years';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) === 1
            ? Math.floor(interval) + ' month'
            : Math.floor(interval) + ' months';
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) === 1
            ? Math.floor(interval) + ' day'
            : Math.floor(interval) + ' days';
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) === 1
            ? Math.floor(interval) + ' hour'
            : Math.floor(interval) + ' hours';
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) === 1
            ? Math.floor(interval) + ' minute'
            : Math.floor(interval) + ' minutes';
    }

    return Math.floor(interval) === 1
        ? Math.floor(interval) + ' second'
        : Math.floor(interval) + ' seconds';

}


export const timeSinceFull = (date: string | Date) => {
    const baseDate = new Date(date)
    const seconds = Math.floor((new Date().getTime() - baseDate.getTime()) / 1000);
    return seconds;
}

export const formatDate = (date: string | Date) => {
    const baseDate = new Date(date)
    return baseDate.toLocaleDateString(
        'en-US',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
    )
}