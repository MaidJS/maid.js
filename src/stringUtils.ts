// stringUtils.ts

export function removeWhitespace(input: string): string {
    return input.replace(/\s/g, '');
}

export function capitalizeFirstLetter(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
}
