// Q1: Personalized Login Greeting
// Store the user's name and get the current hour from the system clock.
const userName = "Shikha";
const currentHour = new Date().getHours();

// Select a greeting based on the current time.
let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
