// Q10: Citizen Eligibility Validator
// Set sample age and citizenship values.
const age = 22;
const isCitizen = true;

// The requirements overlap for citizens aged 18–20.
// This program treats ages 18–20 as vote-only and age 21+ as eligible for all services.
if (isCitizen) {
    if (age >= 21) {
        console.log("Eligible for all services.");
    } else if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
