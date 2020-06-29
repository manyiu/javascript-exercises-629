var multiply = (x, y) => {
  // Return x*y
  // If y is N/A, calculate x*x
  // If x is N/A, return 0
};

// Refactor the code below to use an arrow function
const fibonacciRecursive = function (n) {
  if (n < 3) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

module.exports = { multiply, fibonacciRecursive };
