// Q7: Smart Calculator
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

// Custom error type for unsupported operations.
class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Operation "${operation}" is not recognized.`);
        this.name = "InvalidOperationError";
    }
}

// Perform a calculation based on the selected operation.
function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add":
            return firstNumber + secondNumber;
        case "divide":
            if (secondNumber === 0) {
                throw new Error("Cannot divide by zero.");
            }
            return firstNumber / secondNumber;
        case "power":
            return Math.pow(firstNumber, secondNumber);
        case "root":
            if (firstNumber < 0) {
                throw new Error("Cannot find the real square root of a negative number.");
            }
            return Math.sqrt(firstNumber);
        case "subtract":
            return firstNumber - secondNumber;
        default:
            throw new InvalidOperationError(operation);
    }
}

// Select an operation to test. Change it to any value in the operations array.
const selectedOperation = "divide";

try {
    const result = calculate(selectedOperation, num1, num2);
    console.log("SMART CALCULATOR");
    console.log(`Operation: ${selectedOperation}`);
    console.log(`Numbers: ${num1}, ${num2}`);
    console.log(`Result: ${result}`);
} catch (error) {
    console.log("SMART CALCULATOR");
    console.log(`Operation: ${selectedOperation}`);
    console.log(`Error: ${error.name} - ${error.message}`);
}

console.log("Available operations:", operations);
