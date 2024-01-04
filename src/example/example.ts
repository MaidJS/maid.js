// example.ts
import { fileUtils, stringUtils, dateTimeUtils, logUtils } from '..';

// Example usage of utility functions
const directoryPath = './exampleDirectory';

fileUtils.cleanDirectory(directoryPath);
fileUtils.copyFile('./exampleFile.txt', `${directoryPath}/copiedFile.txt`);

const inputString = '   hello, world!   ';
const trimmedString = stringUtils.removeWhitespace(inputString);
const capitalizedString = stringUtils.capitalizeFirstLetter(trimmedString);

const timestamp = dateTimeUtils.getCurrentTimestamp();
const dateString = dateTimeUtils.formatTimestampToDateString(timestamp);

logUtils.log(`Trimmed and capitalized string: ${capitalizedString}`);
logUtils.log(`Current timestamp: ${timestamp}`);
logUtils.log(`Formatted date: ${dateString}`);
