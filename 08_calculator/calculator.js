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
  

const power = function() {
	
};

const factorial = function() {
	
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
