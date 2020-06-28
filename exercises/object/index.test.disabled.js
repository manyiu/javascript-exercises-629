const { compareAge, dataArrayToObject } = require("./index");
const dataArray = require("./dataArray");
const dataObject = require("./dataObject.json");

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

  test("Yiu & Tina", () => {
    expect(compareAge("Yiu", "Tina")).toEqual(99);
  });
});

describe("Test dataArrayToObject", () => {
  test("Convert", () => {
    expect(JSON.stringify(dataArrayToObject(dataArray))).toEqual(
      JSON.stringify(dataObject)
    );
  });
});
