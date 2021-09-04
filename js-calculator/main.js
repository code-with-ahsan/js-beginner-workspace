// function-keyword <name of function> <parenthesis> <function-body>

let accumulator = "";
let total = 0;

const updateAccumulatorView = () => {
  document.querySelector(".calculator__output__entry").innerHTML = accumulator;
  document.querySelector(".calculator__output__result").innerHTML = "";
};
const updateTotalView = (val) => {
  document.querySelector(".calculator__output__entry").innerHTML = "";
  document.querySelector(".calculator__output__result").innerHTML = val;
};

const clearPressed = () => {
  accumulator = "";
  total = 0;
  updateTotalView(0);
};

const numberPressed = (number) => {
  accumulator += number;
  updateAccumulatorView();
};

const operatorPressed = (operator) => {
  if (!accumulator.length) {
    if (!total) {
      return;
    } else {
      accumulator = `${total}${operator}`;
    }
  }
  const lastDigit = accumulator[accumulator.length - 1];
  if (isNaN(lastDigit)) {
    accumulator = accumulator.substr(0, accumulator.length - 1);
  }
  accumulator += operator;
  updateAccumulatorView();
};

const equalPressed = () => {
  const result = eval(accumulator);
  total = result % 1 === 0 ? result : result.toFixed(2);
  updateTotalView(total);
  accumulator = "";
};

const sum = (firstNumber, secondNumber) => {
  const result = firstNumber + secondNumber;
  return result;
};

const subtract = (firstNumber, secondNumber) => {
  const result = firstNumber - secondNumber;
  return result;
};

const multiply = (firstNumber, secondNumber) => {
  const result = firstNumber * secondNumber;
  return result;
};

const divide = (firstNumber, secondNumber) => {
  const result = firstNumber / secondNumber;
  return result;
};

const main = () => {
  updateTotalView(0);
};

main();
