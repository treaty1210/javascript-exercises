const removeFromArray = function(array, ...num) {
    return array.filter (item => !num.includes(item))
}
// Do not edit below this line
module.exports = removeFromArray;
