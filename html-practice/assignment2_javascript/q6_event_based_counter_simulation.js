// Q6: Event-Based Counter Simulation
// The counter is declared outside the functions so both can update it.
let count = 0;

// Increase the counter to simulate an increment click.
function increment() {
    count++;
    console.log(`Count after increment: ${count}`);
}

// Decrease the counter to simulate a decrement click.
function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);
}

// A nested function can access and update the outer function's count variable.
function runNestedCounterUpdate() {
    function updateCount() {
        count += 2;
        console.log(`Count after nested update: ${count}`);
    }

    updateCount();
}

// Simulate button clicks by calling the functions manually.
increment();
increment();
decrement();
runNestedCounterUpdate();
