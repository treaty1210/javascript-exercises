const sumAll = function(first, last) {
    let answer = 0;
    if (first < 0 || last < 0) {
        return "ERROR";
    } else if (!Number.isInteger(first) || !Number.isInteger(last)) {
        return "ERROR";
    }
    //This code uses a math formula to find sum, but it does not add up integers to find answer.
    /* else if (last > first) {
        answer = (((last * (last + 1))) / 2);
        return answer;
    } else {
        answer = (((first * (first + 1))) / 2);
        return answer;
}
}   */
    //This code adds all the integers to find the sum.
     else if (last > first) {
        for (i = first; i < last + 1; i++) {
            answer += i;
        }
    } else {
        for (i = last; i < first + 1; i++) {
            answer += i;
        }
    } 
    return answer;
};
// Do not edit below this line
module.exports = sumAll;
