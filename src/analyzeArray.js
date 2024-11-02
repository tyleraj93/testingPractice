export function analyzeArray(listNums) {
    if (listNums.length === 0) {
        throw new Error("Array must contain one or more numbers");
    }
    if (!listNums.every((item) => typeof item === "number")) {
        throw new Error("All elements in the array must be numbers");
    }

    const analyzed = listNums.reduce((acc, curr) => {
        acc.sum += curr;
        acc.min = Math.min(acc.min, curr);
        acc.max = Math.max(acc.max, curr);
        acc.len++;
        return acc;
    }, { sum: 0, min: Infinity, max: -Infinity, len: 0 });

    return {
        average: analyzed.sum / analyzed.len,
        min: analyzed.min,
        max: analyzed.max,
        length: analyzed.len,
    };

};