export function toPascalCase(str) {
    return str
        .replace(/_/g, ' ')  // Replace all underscores with spaces
        .replace(/\+/g, ' & ')  // Replace + with & (and add spaces around & for correct word separation)
        .match(/[\p{L}\d']+/giu)  // Match groups of Unicode characters including accented ones, numbers, and apostrophes
        .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
        .join(' ');  // Join without spaces to form PascalCase
}