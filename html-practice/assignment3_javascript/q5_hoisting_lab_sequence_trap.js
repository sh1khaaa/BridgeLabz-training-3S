// Q5: Hoisting Lab - The Sequence Trap
"use strict";

// Original sequence notes:
// console.log(score) prints undefined because var is hoisted and initialized to undefined.
// announce() works before its declaration because function declarations are hoisted.
// Accessing let status before its declaration would throw ReferenceError (TDZ).
// startGame() is safe only after status has been initialized.

// Corrected version: declare and initialize values before using them.
const score = 50;
const status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow-function comparison:
// Arrow functions are not hoisted like function declarations.
// They must be initialized before they are called.
const announceWithArrow = () => {
    console.log("Game started with arrow function");
};

announceWithArrow();

// Debugging: place breakpoints on the calls and inspect the Call Stack.
