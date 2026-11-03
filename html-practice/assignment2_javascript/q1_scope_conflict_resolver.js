// Q1: Scope Conflict Resolver
// The bonus variable is global and can be accessed inside functions.
let bonus = 5000;

// Calculate salary using a local salary and local employment status.
function calculateSalary(isPermanent) {
    const salary = 40000;

    // Add the global bonus only when the employee is permanent.
    const totalSalary = isPermanent ? salary + bonus : salary;

    console.log(`Permanent Employee: ${isPermanent}`);
    console.log(`Total Salary: ₹${totalSalary}`);
}

// Test both cases to show how the local value affects the calculation.
calculateSalary(true);
calculateSalary(false);

// Changing the local parameter does not change the global bonus.
console.log(`Global Bonus remains: ₹${bonus}`);
