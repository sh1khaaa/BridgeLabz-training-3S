// Q2: String Manipulation Report
// Store the product name with extra spaces and mixed letter case.
const productName = " wireless headphones PRO ";

// Trim spaces, convert to lowercase, and capitalize each word.
const trimmedName = productName.trim().toLowerCase();
const capitalizedName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace the word "Pro" with the required edition label.
const cleanedTitle = capitalizedName.replace("Pro", "Pro Edition");

// Display the cleaned product title and its character length.
console.log(`Cleaned Title: ${cleanedTitle}`);
console.log(`Title Length: ${cleanedTitle.length}`);
