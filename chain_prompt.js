function toKebabCase(str) {
    // Step 1: Break the input string into individual words
    // Handle camelCase, PascalCase, and spaces
    const words = str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase: insert space before uppercase
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2') // PascalCase: handle consecutive capitals
        .split(/[\s-_]+/) // split by spaces, hyphens, or underscores
        .filter(word => word.length > 0); // remove empty strings

    // Step 2: Convert all characters in each word to lowercase
    const lowercaseWords = words.map(word => word.toLowerCase());

    // Step 3: Join all lowercase words with hyphens
    return lowercaseWords.join('-');
}

module.exports = toKebabCase;