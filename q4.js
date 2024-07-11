//Write a function that checks if two given strings are anagrams of each other.
function areAnagrams(str1, str2) {
    // Helper function to clean and sort a string
    function cleanString(str) {
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }

    // Clean and sort both strings
    const cleanedStr1 = cleanString(str1);
    const cleanedStr2 = cleanString(str2);

    // Compare the cleaned and sorted strings
    return cleanedStr1 === cleanedStr2;
}

// Example usage
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true

const string3 = "hello";
const string4 = "world";
console.log(areAnagrams(string3, string4)); // Output: false
