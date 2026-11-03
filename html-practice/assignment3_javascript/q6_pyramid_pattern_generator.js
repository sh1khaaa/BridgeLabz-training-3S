// Q6: Pyramid Pattern Generator
"use strict";

// Use a default row count of 5. In a browser, prompt allows a custom limit.
// In Node.js or environments without prompt(), the default value is used.
let rowLimit = 5;

if (typeof prompt === "function") {
    const userInput = prompt("Enter pyramid row count (default 5):");
    if (userInput !== null && userInput.trim() !== "") {
        const parsedLimit = Number(userInput);
        if (Number.isInteger(parsedLimit) && parsedLimit > 0) {
            rowLimit = parsedLimit;
        } else {
            console.log("Invalid input. Using default row count 5.");
        }
    }
}

// Build and print the pyramid using let.
console.log("Pyramid using let:");
for (let row = 1; row <= rowLimit; row++) {
    let pattern = "";
    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }
    console.log(pattern.trimEnd());
}

// var comparison: var is function-scoped, not block-scoped.
// The same row and column variable declarations are reused across loop iterations.
console.log("Pyramid using var:");
for (var varRow = 1; varRow <= rowLimit; varRow++) {
    var varPattern = "";
    for (var varColumn = 1; varColumn <= varRow; varColumn++) {
        varPattern += "* ";
    }
    console.log(varPattern.trimEnd());
}

// Strict mode catches undeclared variables, for example:
// for (i = 1; i <= rowLimit; i++) { } // ReferenceError: i is not defined.

// Debugging practice: set a breakpoint inside the inner loop and watch row,
// column, pattern, varRow, and varColumn to observe their changing values.
