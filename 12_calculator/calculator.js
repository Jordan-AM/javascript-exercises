const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((prev, num) => prev + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((prev, num) => prev * num);
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
