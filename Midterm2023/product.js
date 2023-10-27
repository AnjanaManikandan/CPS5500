const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

function calculateProductAndCallCallback(number1, number2, callback) {
  const product = number1 * number2;
  callback(product);
}

function displayResults(result) {
  console.log("Product of the two numbers:", result);
}

calculateProductAndCallCallback(num1, num2, displayResults);
