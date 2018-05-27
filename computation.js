const add = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const division = (a, b) => a / b;
const multiply = (a, b) => a * b;

const objectValuesToLowerCase = origObj => {
  return Object.keys(origObj).reduce((newObj, key) => {
    let val = origObj[key];
    let newVal = typeof val === 'object' ? objectKeysToLowerCase(val) : val;
    newObj[key] = newVal.toLowerCase();
    return newObj;
  }, {});
};

module.exports = {
  add,
  subtraction,
  division,
  multiply,
  objectValuesToLowerCase
};
