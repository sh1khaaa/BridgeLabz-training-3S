// Q4: Array Performance Analyzer
// Generate eight random integer scores between 30 and 100.
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Use map() to prepare a copy of the scores for analysis.
const analyzedScores = scores.map(score => score);

// Find the highest and lowest scores.
const highestScore = Math.max(...analyzedScores);
const lowestScore = Math.min(...analyzedScores);

// Use reduce() to calculate the total and average.
const totalScore = analyzedScores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / analyzedScores.length;

// Use filter() to count students who passed.
const passedStudents = analyzedScores.filter(score => score >= 50).length;

// Display the complete summary.
console.log("Scores:", analyzedScores);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passedStudents}`);
console.log(`Students Failed: ${analyzedScores.length - passedStudents}`);
