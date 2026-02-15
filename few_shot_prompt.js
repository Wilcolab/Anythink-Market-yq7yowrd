function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\s-]+(.)?/g, (_, char) => char ? char.toUpperCase() : '')
        .replace(/^(.)/, (match) => match.toLowerCase());
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber


function addNumbers(a, b) {
    if (a === null || a === undefined || b === null || b === undefined) {
        throw new Error('Inputs cannot be null or undefined');
    }
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    
    return a + b;
}

// Test cases
console.log(addNumbers(5, 3));           // 8
console.log(addNumbers(10, -5));         // 5
console.log(addNumbers(0, 0));           // 0

try {
    addNumbers('5', 3);
} catch (error) {
    console.error(error.message);        // Both inputs must be numbers
}

try {
    addNumbers(null, 5);
} catch (error) {
    console.error(error.message);        // Inputs cannot be null or undefined
}

