/* complex_program.js */

// This program calculates the Fibonacci series up to a given number using memoization and recursion

// Function to calculate Fibonacci series using memoization
function fibonacci(n) {
  let cache = {};

  function calculateFibonacci(num) {
    if (num in cache) {
      return cache[num];
    }

    if (num <= 2) {
      return 1;
    }

    cache[num] = calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
    return cache[num];
  }

  return calculateFibonacci(n);
}

// Main function to execute the program
function main() {
  const number = parseInt(prompt('Enter a number: '));
  
  if (isNaN(number)) {
    console.log('Invalid number. Please try again.');
    return;
  }

  console.log(`Calculating Fibonacci series up to ${number}:`);

  for (let i = 1; i <= number; i++) {
    const result = fibonacci(i);
    console.log(`Fibonacci(${i}) = ${result}`);
  }
}

// Start the program by calling the main function
main();