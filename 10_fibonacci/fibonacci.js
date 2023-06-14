const fibonacci = function(a) {
    const sequence = [0, 1]; //set up an array
    for (i = 1; i < a; i++) { //i = 1 so that fib sequence starts at 1 instead of 0
        sequence.push(sequence[i] + sequence[i - 1]); //push new value to end of array and the first value would be 1 + 0 = 1, etc.
    }
    return sequence[a]; //return certain number in the array
};

// Do not edit below this line
module.exports = fibonacci;
