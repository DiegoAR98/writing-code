// Task: Write a function to calculate the factorial of a number.

function factorial(n){
    let result = 1;

    for (let i=1; i<= n; i++){
        result = result *i;
    }

    return result;
}


console.log(factorial(5)); // Expected output: 120
console.log(factorial(0)); // Expected output: 1
console.log(factorial(-3)); // Expected output: "Factorial is not defined for negative numbers."

// Task: Create a function that takes an array and returns the sum of all elements.



function sumArray(array) {
    let sum = 0; // Initialize sum

    for (let i = 0; i < array.length; i++) { // Iterate through array
        sum += array[i]; // Add each element to sum
    }

    return sum; // Return the sum
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([-1, -2, -3, -4, -5])); // Output: -15
console.log(sumArray([0, 0, 0, 0, 0])); // Output: 0
