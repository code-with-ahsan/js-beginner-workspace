// function-keyword <name of function> <parenthesis> <function-body>

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
  const firstNumberInput = prompt("Enter first number");
  const number1 = parseInt(firstNumberInput);

  // if number1 is a valid number
  if (isNaN(number1)) {
    alert(
      `You have provided an invalid value for the first number: ${firstNumberInput}`
    );
    return;
  }

  const secondNumberInput = prompt("Enter second number");
  const number2 = parseInt(secondNumberInput);

  // if number2 is a valid number
  if (isNaN(number2)) {
    alert(
      `You have provided an invalid value for the second number: ${secondNumberInput}`
    );
    return;
  }

  const operator = prompt("Enter operator");

  let output;
  // IF ELSE CONDITIONALS
  if (operator == "-") {
    output = subtract(number1, number2);
  } else if (operator == "+") {
    output = sum(number1, number2);
  } else if (operator == "*") {
    output = multiply(number1, number2);
  } else if (operator == "/") {
    output = divide(number1, number2);
  } else {
    alert(`You have provided an invalid operator: ${operator}`);
    return;
  }
  const outputString = `${number1} ${operator} ${number2} = ${output}`;
  document.write(outputString);
};

main();
