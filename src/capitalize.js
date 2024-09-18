export default function capitalize(word) {
    if (typeof word !== "string") {
        throw new Error("Input must be a string")
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
}