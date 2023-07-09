var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var resultElement = document.getElementById("result");

addButton.addEventListener("click", function() {
  performOperation("add");
});

subtractButton.addEventListener("click", function() {
  performOperation("subtract");
});

multiplyButton.addEventListener("click", function() {
  performOperation("multiply");
});

divideButton.addEventListener("click", function() {
  performOperation("divide");
});

function performOperation(operation) {
  var num1 = parseFloat(document.getElementById("n1").value);
  var num2 = parseFloat(document.getElementById("n2").value);

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Please enter valid numbers";
    return;
  }

  var result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        resultElement.textContent = "Cannot divide by zero";
        return;
      }
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
  }

  resultElement.textContent = "Output: " + result;
}
