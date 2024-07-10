# Day 3-4: Functions and Loops

## Goals:
- Learn about functions (declaration, expression, arrow functions) and looping structures (for, while, do-while).
- Write functions and loops to solve problems.

## Activities and Exercises:

### 1. Functions:
- Write a function to calculate the factorial of a number.
- Create a function that takes an array and returns the sum of all elements.
- Write an arrow function to find the maximum number in an array.

### 2. Loops:
- Write a loop that prints numbers from 1 to 10.
- Write a loop that prints the first 10 numbers of the Fibonacci sequence.
- Write a loop that calculates the sum of all even numbers from 1 to 100.

## Hints:

### Functions:
1. **Factorial Function:**
   - Use a loop or recursion inside the function to multiply the numbers from 1 to the given number.

2. **Sum of Array Elements:**
   - Initialize a sum variable to 0.
   - Loop through the array and add each element to the sum variable.

3. **Find Maximum Number:**
   - Use the `Math.max` function or loop through the array to find the largest number.

### Loops:
1. **Print Numbers 1 to 10:**
   - Use a for loop with the initialization at 1, condition `<= 10`, and increment by 1.

2. **Fibonacci Sequence:**
   - Initialize two variables to store the first two numbers of the sequence (0 and 1).
   - Use a loop to calculate and print the next numbers by summing the last two numbers.

3. **Sum of Even Numbers 1 to 100:**
   - Use a loop to iterate through numbers from 1 to 100.
   - Inside the loop, check if the number is even using the modulus operator (`%`).
   - If even, add it to a sum variable.
