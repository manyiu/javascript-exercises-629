const { multiply, fibonacciRecursive } = require("./function");
const { factorial, fibonacci } = require("./loop");
const { compareAge, dataArrayToObject } = require("./object");
const dataArray = require("./object/dataArray");
const dataObject = require("./object/dataObject.json");

//#region Function
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

describe("Test fibonacciRecursive", () => {
  test("1", () => {
    expect(fibonacciRecursive(1)).toEqual(1);
  });

  test("2", () => {
    expect(fibonacciRecursive(2)).toEqual(1);
  });

  test("3", () => {
    expect(fibonacciRecursive(3)).toEqual(2);
  });

  test("10", () => {
    expect(fibonacciRecursive(10)).toEqual(55);
  });
});
//#endregion Function

//#region Loop
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
//#endregion Loop

//#region Object
describe("Test compareAges", () => {
  test("Brian & Daniel", () => {
    expect(compareAge("Brian", "Daniel")).toEqual(25);
  });

  test("Elsa & Kelvin", () => {
    expect(compareAge("Elsa", "Kelvin")).toEqual(99);
  });

  test("Anna & Tina", () => {
    expect(compareAge("Anna", "Tina")).toEqual(99);
  });

  test("Jupiter & Tina", () => {
    expect(compareAge("Jupiter", "Tina")).toEqual(99);
  });
});

describe("Test dataArrayToObject", () => {
  test("Convert", () => {
    expect(JSON.stringify(dataArrayToObject(dataArray))).toEqual(
      JSON.stringify(dataObject)
    );
  });
});
//#endregion Object
