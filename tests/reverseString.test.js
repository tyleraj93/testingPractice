import reverseString from "../src/reverseString";

test('should reverse a string', () => {
    expect(reverseString("cat")).toBe("tac");
});

test('should throw an error if input is not a string', () => {
    expect(() => reverseString(123)).toThrow("Input must be a string");
    expect(() => reverseString(null)).toThrow("Input must be a string");
    expect(() => reverseString({})).toThrow("Input must be a string");
    expect(() => reverseString([])).toThrow("Input must be a string");
});