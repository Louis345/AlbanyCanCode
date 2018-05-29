const add = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const division = (a, b) => a / b;
/** write out here the multiply function */

const objectValuesToLowerCase = origObj => {
  return Object.keys(origObj).reduce((newObj, key) => {
    let val = origObj[key];
    let newVal = typeof val === 'object' ? objectKeysToLowerCase(val) : val;
    newObj[key] = newVal.toLowerCase();
    return newObj;
  }, {});
};
/** Added Multiply to the module.exports here */
module.exports = {
  add,
  subtraction,
  division,
  objectValuesToLowerCase
};
