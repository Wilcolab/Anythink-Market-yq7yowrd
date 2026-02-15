/**
 * Converts a string to camelCase format.
 * 
 * Transforms input strings by splitting on hyphens or underscores,
 * keeping the first word lowercase, and capitalizing the first letter
 * of subsequent words, then joining them together.
 * 
 * @function toCamelCase
 * @param {string} str - The input string to convert. Can contain letters,
 *                       numbers, hyphens, and underscores.
 * @returns {string} The converted string in camelCase format.
 * @throws {Error} If input is null or undefined.
 * @throws {Error} If input is an empty string.
 * @throws {Error} If input contains characters other than letters, numbers,
 *                 hyphens, and underscores.
 * 
 * @example
 * toCamelCase("first_name");      // Returns "firstName"
 * toCamelCase("user-id");         // Returns "userId"
 * toCamelCase("SCREEN_NAME");     // Returns "screenName"
 * toCamelCase("&invalid");        // Throws Error
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms input strings by splitting on hyphens or underscores,
 * converting all characters to lowercase, and joining the words with dots.
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert. Can contain letters,
 *                       numbers, hyphens, and underscores.
 * @returns {string} The converted string in dot.case format.
 * @throws {Error} If input is null or undefined.
 * @throws {Error} If input is an empty string.
 * @throws {Error} If input contains characters other than letters, numbers,
 *                 hyphens, and underscores.
 * 
 * @example
 * toDotCase("first_name");        // Returns "first.name"
 * toDotCase("user-id");           // Returns "user.id"
 * toDotCase("SCREEN_NAME");       // Returns "screen.name"
 * toDotCase("&invalid");          // Throws Error
 */
function toCamelCase(str) {
    // Handle null or undefined
    if (str === null || str === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    // Convert to string if not already
    const input = String(str).trim();

    // Check if empty
    if (input.length === 0) {
        throw new Error("Input cannot be an empty string");
    }

    // Check for valid characters (only letters, numbers, hyphens, and underscores allowed)
    if (!/^[a-zA-Z0-9_-]+$/.test(input)) {
        throw new Error("Input must contain only alphabetic characters, numbers, hyphens, and underscores");
    }

    // Split by hyphens and underscores
    const words = input.split(/[-_]+/);

    // Convert to camelCase
    const camelCased = words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            // First word stays lowercase, rest are capitalized
            return index === 0
                ? lowerWord
                : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join("");

    return camelCased;
}

// Test cases
try {
    console.log(toCamelCase("first name"));        // firstName
    console.log(toCamelCase("user_id"));           // userId
    console.log(toCamelCase("SCREEN_NAME"));       // screenName
    console.log(toCamelCase("mobile-number"));     // mobileNumber
    console.log(toCamelCase("&luckygautam"));      // Throws error
} catch (error) {
    console.error(error.message);
}

function toDotCase(str) {
    // Handle null or undefined
    if (str === null || str === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    // Convert to string if not already
    const input = String(str).trim();

    // Check if empty
    if (input.length === 0) {
        throw new Error("Input cannot be an empty string");
    }

    // Check for valid characters (only letters, numbers, hyphens, and underscores allowed)
    if (!/^[a-zA-Z0-9_-]+$/.test(input)) {
        throw new Error("Input must contain only alphabetic characters, numbers, hyphens, and underscores");
    }

    // Split by hyphens and underscores
    const words = input.split(/[-_]+/);

    // Convert to dot.case
    const dotCased = words
        .map(word => word.toLowerCase())
        .join(".");

    return dotCased;
}

// Test cases for dot.case
try {
    console.log(toDotCase("first name"));          // first.name
    console.log(toDotCase("user_id"));             // user.id
    console.log(toDotCase("SCREEN_NAME"));         // screen.name
    console.log(toDotCase("mobile-number"));       // mobile.number
    console.log(toDotCase("&luckygautam"));        // Throws error
} catch (error) {
    console.error(error.message);
}

