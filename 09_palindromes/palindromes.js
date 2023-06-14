const palindromes = function (word) {
    let palindrome = word.split("").reverse().join("");
    if (palindrome === word) {
        return true;
    }
        
};

// Do not edit below this line
module.exports = palindromes;
