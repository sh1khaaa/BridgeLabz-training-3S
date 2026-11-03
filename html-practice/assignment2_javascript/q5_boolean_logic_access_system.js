// Q5: Boolean Logic Access System
// Set the smart home security conditions.
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// Access is secure only when every required condition is true.
const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

// Use logical operators to display the security status.
if (isSecure && !( !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside)) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Change the values above and run again to test other outcomes.
