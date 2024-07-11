//Write a function that takes a string and capitalizes the first letter of each word in the string.
function capitalizeFirstLetters(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Example usage
const inputString = "hello world this is a test";
const capitalizedString = capitalizeFirstLetters(inputString);
console.log(capitalizedString); // Output: "Hello World This Is A Test"
