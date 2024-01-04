"use strict";
// stringUtils.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeFirstLetter = exports.removeWhitespace = void 0;
function removeWhitespace(input) {
    return input.replace(/\s/g, '');
}
exports.removeWhitespace = removeWhitespace;
function capitalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
