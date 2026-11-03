// Q4: Academic Performance Evaluator
// Enter marks for five subjects (each out of 100).
const marks = [88, 76, 91, 82, 79];

// Calculate total, average, and overall percentage.
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// Validate marks first: any subject below 35 results in detention.
if (marks.some(mark => mark < 0 || mark > 100)) {
    console.log("Invalid marks. Enter values from 0 to 100.");
} else if (marks.some(mark => mark < 35)) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

console.log("Average Marks: " + averageMarks.toFixed(2));
console.log("Overall Percentage: " + percentage.toFixed(2) + "%");
