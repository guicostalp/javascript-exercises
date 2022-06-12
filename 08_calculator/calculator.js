const add = function(number1, number2) {
	newNumber = number1 + number2;

  return newNumber


};

const subtract = function(number1, number2) {
	newNumber = number1 - number2;

  return newNumber
};

const sum = function(array) {
	
  let result = 0;

  if (array.length === 1) {

    return array[0];

  }

  for (let i = 0; i < array.length; i++) {
    result += array[i];  

  }

  return  result;

};

const multiply = function(array) {

  let result = 1;
  
  for (let i = 0; i < array.length; i++) {
    result *= array[i];  

  }
  
  return result;

};

const power = function(number1, number2) {
	
  return Math.pow(number1,number2);

};

const factorial = function(number) {

  if (number === 0){

    return 1
  }

  else {
    let result = 1;

    for (let i = 1; i <= number ; i++) {
      
      result *= i;

    }

    return result;

  }

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
