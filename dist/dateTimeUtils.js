"use strict";
// dateTimeUtils.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimestampToDateString = exports.getCurrentTimestamp = void 0;
function getCurrentTimestamp() {
    try {
        return Math.floor(Date.now() / 1000);
    }
    catch (error) {
        console.error(`Error getting current timestamp: ${error}`);
        return -1;
    }
}
exports.getCurrentTimestamp = getCurrentTimestamp;
function formatTimestampToDateString(timestamp) {
    try {
        const date = new Date(timestamp * 1000);
        return date.toISOString().slice(0, 10);
    }
    catch (error) {
        console.error(`Error formatting timestamp to date string: ${error}`);
        return '';
    }
}
exports.formatTimestampToDateString = formatTimestampToDateString;
