//Write a function that converts a given string to title case (capitalizing the first letter of each word).
function toTitleCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Example usage
const inputString = "hello world this is a test";
const titleCaseString = toTitleCase(inputString);
console.log(titleCaseString); // Output: "Hello World This Is A Test"
