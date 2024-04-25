export function toPascalCase(str) {
    if (str == null) return ""; // Returns an empty string if the input is null or undefined

    const matches = str
        .replace(/_/g, ' ')  // Replace all underscores with spaces
        .replace(/\+/g, ' & ')  // Replace + with & (and add spaces around & for correct word separation)
        .match(/[\p{L}\d']+/giu);  // Match groups of Unicode characters including accented ones, numbers, and apostrophes

    if (!matches) return "";  // Return an empty string if no matches are found

    return matches
        .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
        .join(' ');  // Join without spaces to form PascalCase
}
