// Q3: Transaction Validator
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

// Add a breakpoint on the next line in VS Code to inspect transaction,
// index, and the two report arrays while stepping through the loop.
for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    try {
        if (transaction === null) {
            const error = new Error("Transaction entry is null.");
            error.name = "NullEntryError";
            throw error;
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            const error = new Error("Transaction is missing id or amount.");
            error.name = "MissingFieldError";
            throw error;
        }

        if (transaction.amount < 0) {
            const error = new Error("Transaction amount cannot be negative.");
            error.name = "NegativeAmountError";
            throw error;
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID`);
    } catch (error) {
        invalidTransactions.push({
            index: index + 1,
            category: error.name,
            message: error.message
        });
        console.log(`Transaction at position ${index + 1}: ${error.name} - ${error.message}`);
    }
}

console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful count: ${validTransactions.length}`);
console.log(`Failed count: ${invalidTransactions.length}`);
