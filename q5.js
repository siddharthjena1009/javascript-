//Write a function that takes an array and returns a new array with duplicates removed.
function removeDuplicates(array) {
    // Use a Set to automatically remove duplicates
    return [...new Set(array)];
}

// Example usage
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7]
