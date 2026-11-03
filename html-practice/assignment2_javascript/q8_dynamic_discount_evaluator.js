// Q8: Dynamic Discount Evaluator
// Store cart items as an array of objects.
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart value using reduce().
const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

let discountedTotal = 0;

// Apply category-wise discounts using a loop and conditions.
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const itemFinalPrice = product.price - (product.price * discountRate);
    discountedTotal += itemFinalPrice;

    console.log(
        `${product.item}: ₹${product.price} | Discount: ${discountRate * 100}% | Final: ₹${itemFinalPrice.toFixed(2)}`
    );
}

// Apply an extra 5% discount if the original cart value is above ₹50,000.
let finalTotal = discountedTotal;
let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
    finalTotal -= extraDiscount;
}

// Display the final cart summary.
console.log(`Original Cart Total: ₹${originalTotal.toFixed(2)}`);
console.log(`Total After Category Discounts: ₹${discountedTotal.toFixed(2)}`);
console.log(`Extra Cart Discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final Cart Total: ₹${finalTotal.toFixed(2)}`);
