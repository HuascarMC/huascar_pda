window.onload = function(){

  var calculator = new Calculator();

  var updateView = function(value) {
    var runningTotal = document.querySelector('#running_total');
    runningTotal.value = value;
  };

  //bind number clicks to number buttons
  var numbers = document.querySelectorAll('.number');
  numbers.forEach(function(number) {
    number.onclick = function(e) {
      calculator.numberClick(e.target.innerText);
      updateView(calculator.runningTotal);
    };
  });

  // bind operator clicks to operator buttons
  var operators = document.querySelectorAll('.operator');
  operators.forEach(function(button) {
    button.onclick =  function(e) {
      operator = (e.target.innerText);
      calculator.operatorClick(operator);
      updateView(calculator.runningTotal);
    };
  });

  // handle clicking of the 'clear' button
  var clear = document.querySelector('#clear');
  clear.onclick = function() {
    calculator.clearClick();
    updateView('Cleared');
  };



}
