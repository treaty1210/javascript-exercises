const add = function(a, b) {
	let addAnswer = Number(a + b);
  return addAnswer;
};

const subtract = function(a, b) {
	let subtractAnswer = Number(a - b)
  return subtractAnswer;
};

const sum = function(a) {
	return a.reduce((total, current) => total + current, 0); //Total is previous value, current is current value, 0 is initial value
};

const multiply = function(...a) {
  let multAnswer = 1;
  for (i = 0; i < a.length; i++){;
  multAnswer *= a[i];
  }
  return multAnswer;
};
  

const power = function(a, b) {
	let powAnswer = a;
  for (i = 1; i < b; i++) {
    powAnswer *= a; 
  }
  return powAnswer;
};

const factorial = function(a) {
  let facAnswer = 1;
	if (a === 0) {
    return 1;
  } for (i = a; i > 0; i--) {
    facAnswer *= i;
  } 
  return facAnswer;
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
