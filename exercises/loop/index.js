function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  // while (n >= 1) {
  //   result *= n;
  //   n--;
  // }

  return result;
}

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  }

  if (n < 2) {
    return 1;
  }

  let p0;
  let p1 = 1;
  let p2 = 0;

  for (let i = 2; i <= n; i++) {
    p0 = p2 + p1;
    [p2, p1] = [p1, p0];
  }

  // while (n > 1) {
  //   p0 = p2 + p1;
  //   [p2, p1] = [p1, p0];
  //   n--;
  // }

  return p0;
}

module.exports = { factorial, fibonacci };
