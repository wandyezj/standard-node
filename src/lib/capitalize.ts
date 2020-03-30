/**
 * uppercases the first character in a string.
 * in the case that the first character in the string can not be upper cased (for example a white space character or an empty string) the string is unmodified.
 * @param string
 * @returns the string with it's first character upper cased.
 */
export function capitalize(string: string): string {
    if (string.length === 0) {
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}