import calculator from "../src/calculator";

test('should add two numbers', () => {
    expect(calculator.add(3, 5)).toBe(8);
});

test('should subtract two numbers', () => {
    expect(calculator.subtract(10, 2)).toBe(8);
});

test('should multiply two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
});

test('should divide two numbers', () => {
    expect(calculator.divide(32, 4)).toBe(8);
});