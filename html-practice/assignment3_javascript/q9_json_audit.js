// Q9: JSON Audit
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];

// Parse and validate each JSON line independently.
for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        const parsedEntry = JSON.parse(rawData[index]);

        if (!parsedEntry.user || parsedEntry.age === undefined) {
            throw new Error("Missing required key: user or age.");
        }

        const numericAge = Number(parsedEntry.age);
        if (!Number.isFinite(numericAge)) {
            throw new Error("Age is not a valid number.");
        }

        cleanData.push({
            user: parsedEntry.user,
            age: numericAge
        });
        console.log(`Line ${lineNumber}: valid JSON record.`);
    } catch (error) {
        auditErrors.push({
            line: lineNumber,
            message: error.message
        });
        console.log(`Line ${lineNumber}: ERROR - ${error.message}`);
    }
}

// Bonus: select users under 18 from the valid records.
const under18Users = cleanData.filter(entry => entry.age < 18);

console.log("Clean data:", cleanData);
console.log("Audit errors:", auditErrors);
console.log("Users under 18:", under18Users);
console.log(`Valid records: ${cleanData.length}`);
console.log(`Invalid records: ${auditErrors.length}`);

// Debugging practice: place a breakpoint inside the try block and another
// inside catch. Step through each line to observe how JSON.parse errors jump to catch.
