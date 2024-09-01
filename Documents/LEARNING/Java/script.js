// Declare variables of different data types
var name = "John";       // String
var age = 30;            // Number
var isStudent = true;    // Boolean

// Define functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero");
        return;
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Call functions and print output using console.log
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

console.log("Add:", add(5, 3));           // Output: 8
console.log("Subtract:", subtract(10, 4)); // Output: 6
console.log("Divide:", divide(20, 4));    // Output: 5
console.log("Multiply:", multiply(7, 6)); // Output: 42
