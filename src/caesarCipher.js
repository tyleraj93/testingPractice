export function caesarCipher(str, shift) {
    // Check if the input string is actually a string
    if (typeof str !== "string") {
        throw new Error(`Word must be in string format ie. "word"`);
    }
    // Check if the shift value is a number
    if (typeof shift !== "number") {
        throw new Error("Shift must be in int format ie. 3");
    }

    // Define the Unicode range for uppercase letters (A-Z)
    const upperRangeStart = 65; // A
    const upperRangeEnd = 90; // Z

    // Define the Unicode range for lowercase letters (a-z)
    const lowerRangeStart = 97; // a
    const lowerRangeEnd = 122; // z

    // Initialize an empty string to store the resulting encrypted message
    let cipher = "";

    // Iterate through each character in the input string
    for (const char of str) {
        let charCode = char.charCodeAt(0); // Get the Unicode value of the character

        // Check if the character is uppercase
        if (isInRange(charCode, upperRangeStart, upperRangeEnd)) {
            // Calculate the new character code for uppercase letters with wrapping
            charCode =
                ((charCode - upperRangeStart + shift) % 26) + upperRangeStart;
        }
        // Check if the character is lowercase
        else if (isInRange(charCode, lowerRangeStart, lowerRangeEnd)) {
            // Calculate the new character code for lowercase letters with wrapping
            charCode =
                ((charCode - lowerRangeStart + shift) % 26) + lowerRangeStart;
        }

        // Append the shifted character (or unchanged if non-alphabetic) to the cipher string
        cipher += String.fromCharCode(charCode);
    }

    // Return the final encrypted message
    return cipher;
}

// Utility function to check if a value is within a specified range
function isInRange(value, start, end) {
    return value >= start && value <= end;
}
