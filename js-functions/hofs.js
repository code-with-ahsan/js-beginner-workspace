// higher order function
const calculate = (num1, num2, operationFn) => {
  console.log(`num1 is ${num1}`);
  console.log(`num2 is ${num2}`);
  const result = operationFn(num1, num2);
  return result.toFixed(2);
};

const sum = (num1, num2) => {
  return num1 + num2;
};
const sub = (num1, num2) => {
  return num1 - num2;
};
const mul = (num1, num2) => {
  return num1 * num2;
};

const div = (num1, num2) => {
  return num1 / num2;
};

console.log(calculate(10.5, 2.4, sum));
console.log(calculate(10.5, 2.4, sub));
console.log(calculate(10.5, 2.4, mul));
console.log(calculate(22, 7, div));
const fruits = ["🍎", "🍉", "🍓"];
let fruitsModified = fruits.map((fruit, index) => {
  return `Fruit ${index} is ${fruit}`;
});
const customMap = (array, cb) => {
  const returnedArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    returnedArray.push(cb(element, index));
  }
  return returnedArray;
};

fruitsModified = customMap(fruits, (fruit, index) => {
  return `Fruit ${index} is ${fruit}`;
});

console.log(fruitsModified);
