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

});
