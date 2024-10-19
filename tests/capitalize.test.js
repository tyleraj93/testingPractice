import {capitalize} from "../src/capitalize";

test("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("throws an error if input is not a string", () => {
    expect(() => capitalize(123)).toThrow("Input must be a string");
    expect(() => capitalize(null)).toThrow("Input must be a string");
    expect(() => capitalize({})).toThrow("Input must be a string");
    expect(() => capitalize([])).toThrow("Input must be a string");
});