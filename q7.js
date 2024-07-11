//Write a function that generates the first n numbers of the Fibonacci sequence.
function generateFibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }

    // Initialize the array with the first two Fibonacci numbers
    const fibonacci = [0, 1];

    // Generate the remaining Fibonacci numbers
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

// Example usage
const n = 10;
const fibonacciSequence = generateFibonacci(n);
console.log(fibonacciSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
