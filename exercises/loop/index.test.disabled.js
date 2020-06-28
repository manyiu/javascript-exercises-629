const { factorial, fibonacci } = require("./index");

describe("Test Factorial Function", () => {
  test("0!", () => {
    expect(factorial(0)).toEqual(1);
  });

  test("1!", () => {
    expect(factorial(1)).toEqual(1);
  });

  test("5!", () => {
    expect(factorial(5)).toEqual(120);
  });

  test("10!", () => {
    expect(factorial(10)).toEqual(3628800);
  });
});

describe("Test fibonacci Function", () => {
  test("0", () => {
    expect(fibonacci(0)).toEqual(0);
  });

  test("1", () => {
    expect(fibonacci(1)).toEqual(1);
  });

  test("2", () => {
    expect(fibonacci(2)).toEqual(1);
  });

  test("3", () => {
    expect(fibonacci(3)).toEqual(2);
  });

  test("12", () => {
    expect(fibonacci(12)).toEqual(144);
  });
});
