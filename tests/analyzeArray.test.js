import { analyzeArray } from "../src/analyzeArray";

test("should throw an error if the input is not a list of one or more numbers", () => {
    expect(() => analyzeArray([])).toThrow("Array must contain one or more numbers");
    expect(() => analyzeArray([a])).toThrow("All elements in the array must be numbers")
})

test("should return an object with properties average, min, max, and length with values 4, 1, 8, 6", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
