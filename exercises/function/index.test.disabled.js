const { multiply, fibonacci } = require("./index");

describe("Test multiply", () => {
  test("No argument", () => {
    expect(multiply()).toEqual(0);
  });

  test("No y", () => {
    expect(multiply(10)).toEqual(10 * 10);
  });

  test("x is undefined", () => {
    expect(multiply(undefined, 10)).toEqual(0);
  });

  test("x = 721, y = 831", () => {
    expect(multiply(721, 831)).toEqual(721 * 831);
  });
});

describe("Test fibonacci", () => {
  test("1", () => {
    expect(fibonacci(1)).toEqual(1);
  });

  test("2", () => {
    expect(fibonacci(2)).toEqual(1);
  });

  test("3", () => {
    expect(fibonacci(3)).toEqual(2);
  });

  test("10", () => {
    expect(fibonacci(10)).toEqual(55);
  });
});
