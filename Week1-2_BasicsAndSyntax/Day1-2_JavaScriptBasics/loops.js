// Task: Write a loop that prints numbers from 1 to 10.

function loop() {
    for (let i = 1; i <= 10; i++) {
        console.log(i); // Print the current number
    }
}

loop();

//Task: Write a loop that calculates the sum of all even numbers from 1 to 100.

// Hint: Use a loop to iterate through numbers from 1 to 100.
// Inside the loop, check if the number is even using the modulus operator (%). If even, add it to a sum variable.

function even (){

    let sum = 0; // Initialize sum variable

    for(i=2;i <= 100;i++){
        if (i % 2 === 0){
sum += i;
        }
    
    }
    return sum; // Return the sum of all even numbers

}

console.log(even()); // Call the function and print the result
