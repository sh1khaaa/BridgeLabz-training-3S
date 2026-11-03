// Q6: Progressive Discount System
// Enter a sample purchase amount.
const purchaseAmount = 6500;

let discountPercentage;

// Apply the highest eligible discount tier.
if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

// Calculate discount and final price.
const discountAmount = purchaseAmount * (discountPercentage / 100);
const finalPrice = Math.round(purchaseAmount - discountAmount);

console.log("Original Total: ₹" + Math.round(purchaseAmount));
console.log("Discount: " + discountPercentage + "%");
console.log("Final Price: ₹" + finalPrice);
