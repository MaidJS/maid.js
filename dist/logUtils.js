"use strict";
// logUtils.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
function log(message) {
    try {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
    }
    catch (error) {
        console.error(`Error logging message: ${error}`);
    }
}
exports.log = log;
