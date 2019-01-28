//callback
function numDivider(divisor, divider){
    result = divisor / divider;
    if (result == "Infinity"){
        return `cannot divide any number by zero(0)`;
    }else{
        return result;
    }
}

function numDiv (number1, number2, callback){
    return callback(number1, number2);
}

console.log(numDiv(3, 0, numDivider));