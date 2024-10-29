import {caesarCipher} from "../src/caesarCipher";

test('should wrap from z to a', () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test('should preserve case', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test('should keep non-alphabetic characters unchanged', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("should throw an error if input is incorrect format", () => {
    expect(() => caesarCipher(123, 3)).toThrow(`Word must be in string format ie. "word"`);
    expect(() => caesarCipher("catch", "3")).toThrow("Shift must be in int format ie. 3")
})