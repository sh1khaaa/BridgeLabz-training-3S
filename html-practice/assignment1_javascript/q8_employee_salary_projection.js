// Q8: Employee Salary Projection
// Set the current salary and annual increment rate.
const currentSalary = 40000;
const annualIncrementRate = 8;

let projectedSalary = currentSalary;
const salaryReport = [];

// Increase the salary once per year for five years.
for (let year = 1; year <= 5; year++) {
    projectedSalary *= (1 + annualIncrementRate / 100);
    projectedSalary = Math.round(projectedSalary);

    salaryReport.push({
        Year: year,
        Salary: projectedSalary
    });
}

// Display the yearly salary projection in a formatted table.
console.table(salaryReport);
