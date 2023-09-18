let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
function decrement() {
    count = count - 1
    countEl.innerText = count
}
function save() {
    console.log(count)
}


// let countEl = document.getElementById("count-el");
// let count = localStorage.getItem("count") || 0; // Initialize count from localStorage or set to 0 if not found

// function increment() {
//     count = parseInt(count) + 1; // Convert count to a number and increment
//     countEl.innerText = count;
//     localStorage.setItem("count", count); // Store the updated count in localStorage
// }

// function decrement() {
//     count = parseInt(count) - 1; // Convert count to a number and decrement
//     countEl.innerText = count;
//     localStorage.setItem("count", count); // Store the updated count in localStorage
// }

// function save() {
//     console.log(count);
// }

// // Initialize the count element with the value from localStorage
// countEl.innerText = count;


// 
// Assuming you have a counter variable named 'count'

// Function to reset the counter
function resetCounter() {
    count = 0;
    document.getElementById('count-el').innerText = count;
}

// Add an event listener to the "reset" element
const resetElement = document.querySelector('.reset');
resetElement.addEventListener('click', resetCounter);


// 


