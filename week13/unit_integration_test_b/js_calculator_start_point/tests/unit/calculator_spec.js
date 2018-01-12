var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add', function() {
   calculator.add(1);
   assert.equal(1, calculator.runningTotal);
  })

  it('it should subtract', function() {
   calculator.subtract(1);
   assert.equal(-1, calculator.runningTotal);
  })

  it('it should multiply', function() {
   calculator.multiply(1);
   assert.equal(0, calculator.runningTotal);
  })

  it('it should divide', function() {
   calculator.divide(1);
   assert.equal(0, calculator.runningTotal);
  })

  it('it should click number', function() {
   calculator.numberClick(7);
   assert.equal(7, calculator.runningTotal);
  })

  it('it should clear click', function() {
   calculator.clearClick();
   assert.equal(0, calculator.runningTotal);
   assert.equal(null, calculator.previousTotal);
   assert.equal(null, calculator.previousOperator);
  })
});
