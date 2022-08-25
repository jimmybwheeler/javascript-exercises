const add = function(a,b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a,b) {
	let sum = a - b;
  return sum;
};

const sum = function(array) {
  return array.reduce((accumulator, initialValue) => accumulator + initialValue, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, initialValue) => accumulator * initialValue);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	let result = 1;

  for(let i = 2; i <= num; i++){
    result = result * i;
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
  factorial
};
