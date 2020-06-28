const dataAge = require("./dataAge.json");

const compareAge = (nameA, nameB) => {
  const {
    [nameA]: { age: ageA = 99, secret: secretA = false } = {},
    [nameB]: { age: ageB = 99, secret: secretB = false } = {},
  } = dataAge;

  if (secretA || secretB) {
    return 99;
  }

  return Math.max(ageA, ageB);
};

const dataArrayToObject = (dataArray) => {
  const dataObject = {};

  for (let i = 0; i < dataArray.length; i++) {
    const { id, name } = dataArray[i];
    dataObject[id] = name;
  }

  return dataObject;
};

module.exports = { compareAge, dataArrayToObject };
