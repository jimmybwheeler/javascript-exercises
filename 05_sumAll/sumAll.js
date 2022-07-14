const sumAll = function(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if(a < 0 || b < 0) return "ERROR";
    if(a > b){
        const temp = a;
        a = b;
        b = temp;
    }
    let total = 0;
    let high = Math.max(a,b);
    console.log(high);
    for(let i = 0; i <= high; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
