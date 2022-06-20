const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }
    else{
        if (num1 < num2){
            for (let i = 0; i < num2; i++){
                sum += num1
                num1 += 1;
            }
        }
        else if (num1 > num2){
            for (let i = 0; i < num1; i++){
                sum += num2
                num2 += 1;
            }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
