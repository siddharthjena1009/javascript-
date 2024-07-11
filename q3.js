//Write a function that takes a nested array and returns a flattened array.
function flattenArray(nestedArray) {
    // Use the reduce method to flatten the array
    return nestedArray.reduce((accumulator, currentValue) => {
        if (Array.isArray(currentValue)) {
            // If the current value is an array, recursively flatten it
            return accumulator.concat(flattenArray(currentValue));
        } else {
            // If the current value is not an array, add it to the accumulator
            return accumulator.concat(currentValue);
        }
    }, []);
}

// Example usage
let nestedArray = [1, [2, [3, 4], 5], [6, 7], 8, [9, [10]]];
let flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

