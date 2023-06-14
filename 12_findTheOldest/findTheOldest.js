const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldAge = currentAge(oldest.yearOfBirth, oldest.yearOfDeath); //Run first object in array through currentAge function
        const age = currentAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath); //Run next object through currentAge function
        return oldAge < age ? currentPerson : oldest; //If oldAge is less than age, then return currentPerson. If not then return oldest
    });
};

const currentAge = (birth, death) => { //Age function, should be called in the first function to determine age
    if (!death) {
        death = new Date().getFullYear(); //This solves issue of Carly not having death year
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
