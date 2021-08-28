// function-keyword <name of function> <parenthesis> <function-body>

let number1 = prompt("Enter first number");
number1 = parseInt(number1);
let number2 = prompt("Enter second number");
number2 = parseInt(number2);

// + add, - subtract, * multiply, / divide

function sum(firstNumber, secondNumber) {
  const result = firstNumber + secondNumber;
  return result;
}

const sumES6 = (firstNumber, secondNumber) => {
  const result = firstNumber + secondNumber;
  return result;
};

// <function-name> use `()`
const output = sumES6(number1, number2);
console.log(output);

// a function can get parameters/arguments/inputs
// a function can also return outputs
