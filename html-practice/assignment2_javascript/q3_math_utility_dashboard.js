// Q3: Math Utility Dashboard
// Store the input number.
const x = 16.75;

// Perform the required mathematical operations.
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Display all results in a formatted summary.
console.log(`
MATH UTILITY DASHBOARD
----------------------
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
Power (x^3): ${cube.toFixed(2)}
Random Number (10-50): ${randomNumber}
`);
