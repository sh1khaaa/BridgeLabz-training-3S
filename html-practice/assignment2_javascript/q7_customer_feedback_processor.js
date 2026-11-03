// Q7: Customer Feedback Processor
// Store a sample customer feedback comment.
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase to make keyword checks case-insensitive.
const normalizedFeedback = feedback.toLowerCase();

// Split the feedback into words and count them.
const words = normalizedFeedback.split(/\s+/).filter(word => word.length > 0);
const wordCount = words.length;

// Check whether the feedback contains negative keywords.
const hasNegativeFeedback =
    normalizedFeedback.includes("bad") || normalizedFeedback.includes("poor");

// Display the feedback result.
console.log(`Word Count: ${wordCount}`);

if (!hasNegativeFeedback) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
