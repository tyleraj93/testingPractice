import caesarCipher from "../src/caesarCipher";

test('should wrap from z to a', () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test('should preserve case', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test('should keep non-alphabetic characters unchanged', () => {
    expect(caesarCipher("Hello, World!", 3));
});