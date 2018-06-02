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

function itShouldBeZero(){
  const cal1 = new Calculator();
  expect(cal1.calculate('')).to.be.equal(0);
}

// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
}

function testEmptyString(){
  it('should be zero',itShouldBeZero);
}

// Start Describe
describe('Example', exampleBehaviors);
describe('Empty string should return zero',testEmptyString);

