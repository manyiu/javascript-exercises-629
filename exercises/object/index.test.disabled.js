const { compareAge, dataArrayToObject } = require("./index");

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
});
