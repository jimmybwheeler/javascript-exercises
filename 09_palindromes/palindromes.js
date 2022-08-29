const palindromes = function (myString) {
    let array = Array.from(myString.toLowerCase().replace(/[^a-z]/g, ""));
    return array.reverse() == array;
};

// Do not edit below this line
module.exports = palindromes;
