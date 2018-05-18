var expect = require('chai').expect;

const { add } = require('./computation');

console.log(add(2, 3));

describe('addition', () => {
  it('it should add two numbers', () => {
    expect(5, add(2, 3)).to.equal(5);
  });
});
