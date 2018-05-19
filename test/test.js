var expect = require('chai').expect;

const { add, subtraction, division, multiply } = require('../computation');

describe('computation', () => {
  it('it should add two numbers', () => {
    expect(5, add(2, 3)).to.equal(5);
  });
  it('it should subtract two numbers', () => {
    expect(1, subtraction(3, 2)).to.equal(1);
  });
  it('it should divide two numbers', () => {
    expect(2, division(10, 5)).to.equal(2);
  });
  it('it should multiply two number', () => {
    expect(6, multiply(2, 3)).to.equal(6);
  });
});
