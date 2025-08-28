// ==========================
// Part 1: JavaScript Basics
// ==========================

// Variable declarations
let userName = "Rosemary";
let userAge = 22;

// Conditionals
if (userAge >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.");
}

// Example of modifying webpage content with JS
document.getElementById("intro").textContent = 
    `Welcome ${userName}, you are ${userAge} years old.`;

// ==========================
// Part 2: Custom Functions
// ==========================

// Function 1: Greeting user
function greet(name) {
    return "Hello, " + name + "! Welcome to JavaScript.";
}

// Function 2: Calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Using the functions
console.log(greet(userName));
console.log("Total cost for 3 items at $5 each:", calculateTotal(5, 3));

// ==========================
// Part 3: Loops
// ==========================

// For loop - countdown
for (let i = 5; i > 0; i--) {
    console.log("Countdown: " + i);
}

// While loop - increment
let counter = 1;
while (counter <= 3) {
    console.log("While loop count:", counter);
    counter++;
}

// ==========================
// Part 4: DOM Interactions
// ==========================

// 1. Change text content on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("intro").textContent = "The text has been updated via JavaScript!";
});

// 2. Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "List item " + (document.querySelectorAll("#itemList li").length + 1);
    document.getElementById("itemList").appendChild(li);
});

// 3. Toggle CSS class on heading
document.getElementById("toggleColorBtn").addEventListener("click", function() {
    document.querySelector("h1").classList.toggle("active");
});
