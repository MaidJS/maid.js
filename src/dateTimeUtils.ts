// dateTimeUtils.ts

export function getCurrentTimestamp(): number {
    try {
        return Math.floor(Date.now() / 1000);
    } catch (error) {
        console.error(`Error getting current timestamp: ${error}`);
        return -1;
    }
}

export function formatTimestampToDateString(timestamp: number): string {
    try {
        const date = new Date(timestamp * 1000);
        return date.toISOString().slice(0, 10);
    } catch (error) {
        console.error(`Error formatting timestamp to date string: ${error}`);
        return '';
    }
}
