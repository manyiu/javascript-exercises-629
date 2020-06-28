var multiply = (x = 0, y = x) => {
  return x * y;
};

// Refactor the code below to use an arrow function
const fibonacci = (n) => (n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

module.exports = { multiply, fibonacci };
