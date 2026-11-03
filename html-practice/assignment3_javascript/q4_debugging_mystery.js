// Q4: Debugging Mystery
"use strict";

// Original issue:
// greeting = "Welcome";
// In strict mode, assigning to an undeclared variable throws ReferenceError.

// Corrected version: declare greeting in the function's local scope.
function showMessage() {
    let greeting = "Welcome";

    // Add greeting to the VS Code Watch panel to observe its value.
    console.log(greeting);
}

showMessage();

// Debugging practice:
// 1. Set a breakpoint on the console.log() line.
// 2. Start Run and Debug (F5).
// 3. Add "greeting" to the Watch panel.
// 4. Inspect the Call Stack: showMessage is active, then the global script.
