const palindromes = function (word) {
    let palindrome = word.toLowerCase().replace(/[^a-z0-9]/g, ""); //removes all uppercase, spaces, and punctuation
    return palindrome.split("").reverse().join("") === palindrome; //reverse string function tested against original palindrome
}; 

// Do not edit below this line
module.exports = palindromes;