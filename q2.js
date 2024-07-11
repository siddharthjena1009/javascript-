//Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.
function evaluateExpression(expression) {
    // Remove any whitespace from the expression
    expression = expression.replace(/\s+/g, '');
    
    // Use a regular expression to split the expression into tokens
    // This splits the expression at every '+' or '-' but keeps the operators in the result
    let tokens = expression.split(/(?=[+-])/);
    
    // Initialize the result
    let result = 0;
    
    // Iterate over the tokens and evaluate the expression
    for (let token of tokens) {
        result += Number(token);
    }
    
    return result;
}

// Example usage
let expression = "10 + 20 - 5 + 3";
let result = evaluateExpression(expression);
console.log(result);  // Output: 28
