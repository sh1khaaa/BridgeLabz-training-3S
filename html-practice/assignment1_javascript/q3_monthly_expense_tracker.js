// Q3: Monthly Expense Tracker
// Store expenses for five categories.
const expenses = {
    food: 4500,
    travel: 1800,
    rent: 8000,
    bills: 2200,
    leisure: 1500
};

// Add all category expenses to calculate the total.
let totalExpense = 0;
for (const category in expenses) {
    totalExpense += expenses[category];
}

// Calculate the average expense across five categories.
const averageExpense = totalExpense / Object.keys(expenses).length;

// Add 10% tax using an assignment operator.
const taxAmount = totalExpense * 0.10;
let finalAmount = totalExpense;
finalAmount += taxAmount;

// Display amounts rounded to two decimal places.
console.log("Total Expense: ₹" + totalExpense.toFixed(2));
console.log("Average Expense: ₹" + averageExpense.toFixed(2));
console.log("Tax (10%): ₹" + taxAmount.toFixed(2));
console.log("Final Amount After Tax: ₹" + finalAmount.toFixed(2));
