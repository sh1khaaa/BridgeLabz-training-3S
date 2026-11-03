// Q9: Odd-Even Number Analyzer
// Create an array containing numbers from 1 to 30 using a loop.
const numbers = [];

for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Classify each number and store its result in a new array.
const results = [];

for (const number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
        results.push(`${number}: FizzBuzz`);
    } else if (number % 2 === 0) {
        results.push(`${number}: Even`);
    } else {
        results.push(`${number}: Odd`);
    }
}

// Display all classifications.
console.log(results);
