// Q1: Dynamic Data Parser
"use strict";

// Mixed values received from an API.
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidNumericData = [];

// Convert every value and classify its numeric conversion.
for (let index = 0; index < apiData.length; index++) {
    const originalValue = apiData[index];
    const numberValue = Number(originalValue);
    const booleanValue = Boolean(originalValue);
    const stringValue = String(originalValue);

    const report = {
        index: index + 1,
        original: stringValue,
        number: Number.isNaN(numberValue) ? "NaN" : numberValue,
        boolean: booleanValue,
        string: stringValue
    };

    // Empty/whitespace strings and null/undefined are not accepted as numeric data.
    const isBlankString =
        typeof originalValue === "string" && originalValue.trim() === "";
    const isInvalidNumber =
        Number.isNaN(numberValue) || isBlankString ||
        originalValue === null || originalValue === undefined;

    if (isInvalidNumber) {
        invalidNumericData.push(report);
        console.log(`INVALID [${index + 1}]:`, report);
    } else {
        validNumericData.push(numberValue);
        console.log(`VALID   [${index + 1}]:`, report);
    }
}

console.log("Valid numeric data:", validNumericData);
console.log("Invalid data entries:", invalidNumericData);
console.log(`Valid count: ${validNumericData.length}`);
console.log(`Invalid count: ${invalidNumericData.length}`);
