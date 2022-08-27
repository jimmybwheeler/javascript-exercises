const palindromes = function (myString) {
    for(let i = 0; i < myString.length; i++){
        if(myString.charAt(i) == myString.charAt(-i)){
            return;
        }
    } 
};

// Do not edit below this line
module.exports = palindromes;
