// logUtils.ts

export function log(message: string): void {
    try {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
    } catch (error) {
        console.error(`Error logging message: ${error}`);
    }
}
