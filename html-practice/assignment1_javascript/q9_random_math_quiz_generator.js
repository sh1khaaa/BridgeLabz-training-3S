// Q9: Random Math Quiz Generator
// Generate two random integers between 1 and 20.
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator.
const operators = ["+", "-", "*", "/"];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Calculate the answer according to the selected operator.
switch (randomOperator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;
    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;
    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;
    case "/":
        correctAnswer = (firstNumber / secondNumber).toFixed(2);
        break;
    default:
        console.log("Invalid operator.");
}

console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber} = ?`);
console.log("Correct Answer: " + correctAnswer);
