// Q8: Strict Mode Showdown
"use strict";

// Strict mode rejects duplicate parameter names and assignment to undeclared variables.
// The following original function would fail to parse in strict mode:
// function demo(a, a) { total = 10; delete total; }

// Correct ES6 version: use unique parameters and declared local variables.
function demo(firstValue, secondValue) {
    let total = 10;

    // Deleting a local variable binding is not allowed; update it instead.
    total = firstValue + secondValue;

    console.log(`First: ${firstValue}`);
    console.log(`Second: ${secondValue}`);
    console.log(`Total: ${total}`);
}

demo(5, 10);

// To compare non-strict behavior, run a separate file without "use strict".
// In a non-strict classic script, duplicate parameter names may be accepted
// and assigning to an undeclared identifier may create a global property.
// Deleting an unqualified identifier still does not reliably delete a variable.
// Strict mode turns these unsafe patterns into errors.
