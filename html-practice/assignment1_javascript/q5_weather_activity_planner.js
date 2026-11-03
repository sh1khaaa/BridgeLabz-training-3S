// Q5: Weather Activity Planner
// Set sample weather values.
const temperature = 28;
const isRaining = false;
const windSpeed = 12;

// Recommend an activity based on rain, temperature, and wind.
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (!isRaining && (temperature >= 15 || windSpeed <= 20)) {
    console.log("Perfect day for a walk.");
} else {
    console.log("Stay indoors and check the weather.");
}
