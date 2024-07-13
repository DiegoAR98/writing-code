// Task: Write a loop that prints numbers from 1 to 10.

function loop () {
    for (i=1;i <= 10; i++) {
            console.log (i)
    }
}
loop ();




//Task: Write a loop that calculates the sum of all even numbers from 1 to 100.

// Hint: Use a loop to iterate through numbers from 1 to 100.
// Inside the loop, check if the number is even using the modulus operator (%). If even, add it to a sum variable.

function even() {
    let sum = 0; // Step 1

    for (let i = 1; i <= 100; i++) { // Step 2
        if (i % 2 === 0) { // Step 3
            sum += i; // Step 4
        }
    }

    return sum; // Step 5
}

console.log(even()); // Call the function and print the result