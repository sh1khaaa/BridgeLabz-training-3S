// Q10: Nested Hoisting and Closures
"use strict";

// Function declaration outer() is hoisted.
function outer() {
    // var count is hoisted within outer() and starts as undefined.
    console.log("Outer count before assignment:", count);

    var count = 5;

    // Function declaration inner() creates its own function scope.
    function inner() {
        // This inner var count is hoisted in inner() and is separate from outer count.
        console.log("Inner count before assignment:", count);
        var count = 10;
        console.log("Inner count after assignment:", count);
    }

    inner();
    console.log("Outer count after inner():", count);
}

outer();

// Expected output:
// Outer count before assignment: undefined
// Inner count before assignment: undefined
// Inner count after assignment: 10
// Outer count after inner(): 5

// Arrow-function comparison:
// Arrow functions do not create their own function scope for var in the same way
// when the declaration is placed in the outer function body. This arrow reads
// the outer count through lexical scope.
function outerWithArrow() {
    var count = 5;

    const innerArrow = () => {
        console.log("Arrow reads outer count:", count);
    };

    innerArrow();
}

outerWithArrow();

// Debugging practice: set breakpoints in outer(), inner(), and innerArrow().
// The Call Stack shows outer -> inner, then returns to outer; the arrow call
// executes within outerWithArrow and reads count from its lexical environment.
