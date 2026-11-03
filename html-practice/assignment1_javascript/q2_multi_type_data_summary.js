// Q2: Multi-Type Data Summary
// Create sample values using different JavaScript data types.
const userName = "Aarav";
const userAge = 21;
const isStudent = true;
const subjects = ["JavaScript", "HTML", "CSS"];
const userDetails = { city: "Mathura", course: "B.Tech" };
const middleName = null;
let alternateEmail;

// Prepare a report with each value and its identified type.
const dataReport = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "User Age", Value: userAge, Type: typeof userAge },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Details", Value: JSON.stringify(userDetails), Type: typeof userDetails },
    { Label: "Middle Name", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "Alternate Email", Value: alternateEmail, Type: typeof alternateEmail }
];

// Display the complete report in one table.
console.table(dataReport);
