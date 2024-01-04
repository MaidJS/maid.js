"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// example.ts
const __1 = require("..");
// Example usage of utility functions
const directoryPath = './exampleDirectory';
__1.fileUtils.cleanDirectory(directoryPath);
__1.fileUtils.copyFile('./exampleFile.txt', `${directoryPath}/copiedFile.txt`);
const inputString = '   hello, world!   ';
const trimmedString = __1.stringUtils.removeWhitespace(inputString);
const capitalizedString = __1.stringUtils.capitalizeFirstLetter(trimmedString);
const timestamp = __1.dateTimeUtils.getCurrentTimestamp();
const dateString = __1.dateTimeUtils.formatTimestampToDateString(timestamp);
__1.logUtils.log(`Trimmed and capitalized string: ${capitalizedString}`);
__1.logUtils.log(`Current timestamp: ${timestamp}`);
__1.logUtils.log(`Formatted date: ${dateString}`);
