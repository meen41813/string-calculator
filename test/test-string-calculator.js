const chai = require('chai');
const Calculator = require('../Calculator');

const { expect } = chai;

// Start test cases for Example Behaviors
function itAlwaysTrue() {
  // Chai API Reference can be found at http://www.chaijs.com/api/bdd/
  expect(true).to.be.true;
}

function itAlwaysBe2() {
  expect(2).to.be.equal(2);
}

function itShouldBeZero() {
  const cal1 = new Calculator();
  expect(cal1.calculate('')).to.be.equal(0);
}

function singleNumber() {
  // console.log('>> n = ' + n);
  const cal1 = new Calculator();
  expect(cal1.calculate(2)).to.be.equal(2);
  // expect(cal1.calculate(9)).to.be.equal(9);
  // expect(cal1.calculate(5)).to.be.equal(5);
  // expect(cal1.calculate(99)).to.be.equal(99);
  // expect(cal1.calculate(-50)).to.be.equal(-50);
}

function sum() {
  const cal1 = new Calculator();
  expect(cal1.calculate('10,1')).to.be.equal(11);
  // expect(cal1.calculate("0,-15")).to.be.equal(-15);
  // expect(cal1.calculate("99,11")).to.be.equal(110);
  expect(cal1.calculate('100,10,1')).to.be.equal(111);
}

function sum2() {
  const cal1 = new Calculator();
  expect(cal1.calculate('50\n10\n40')).to.be.equal(100);
}
// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
  it('should be zero', itShouldBeZero);
  it('single number', singleNumber);
  it('summation', sum);
  it('summation2', sum2);
}


// Start Describe
describe('Example', exampleBehaviors);
// describe('Empty string should return zero', testEmptyString);
