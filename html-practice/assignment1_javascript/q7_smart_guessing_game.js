// Q7: Smart Guessing Game
// Generate a random secret number between 1 and 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Change this test value to try different guesses.
const userGuess = 25;

// Compare the guess with the secret number using nested conditions.
if (userGuess >= 1 && userGuess <= 50) {
    if (userGuess === secretNumber) {
        console.log("Correct guess!");
    } else {
        const difference = Math.abs(userGuess - secretNumber);

        if (difference <= 3) {
            console.log("Very close!");
        } else if (userGuess > secretNumber) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }
    }
} else {
    console.log("Please enter a number between 1 and 50.");
}

console.log("Secret Number (for testing): " + secretNumber);
