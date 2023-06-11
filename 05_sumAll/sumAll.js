const sumAll = function(first, last) {
    let answer = 0;
    if (first < 0 || last < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(first) || !Number.isInteger(last)) {
        return "ERROR";
    }
    if (last > first) {
        answer = (((last * (last + 1))) / 2);
        return answer;
    } else {
        answer = (((first * (first + 1))) / 2);
        return answer;
}
}   
    
    //This one uses a for loop, does not work with large number first.
    /* if (last > first) {
        for (i = first; i < last + 1; i++) {
            answer += i;
        }
        return answer;
    } else if (first > last) {
        for (i = last; i < first + 1; i++) {
            answer += i;
        }
    } else {
        return "ERROR";
    }
}; */
// Do not edit below this line
module.exports = sumAll;
