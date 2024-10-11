export default function reverseString(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}