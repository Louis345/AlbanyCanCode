var expect = require('chai').expect;
/** Need to import here */
const {
  add,
  subtraction,
  division,
  objectValuesToLowerCase
} = require('../computation');

describe('computation', () => {
  it('it should add two numbers', () => {
    expect(5, add(2, 3)).to.equal(5);
  });
  it('it should subtract two numbers', () => {
    expect(1, subtraction(3, 2)).to.equal(1);
  });
  it('it should divide two numbers', () => {});
  it('it should multiply two number', () => {});
  it('it should lower case all object key values', () => {
    expect(objectValuesToLowerCase({ Name: 'Jamal' })).to.deep.equal({
      Name: 'jamal'
    });
  });
});
