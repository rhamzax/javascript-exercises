const repeatString = function(word, amount) {
    if (amount < 0){
        return "ERROR";
    }
    let phrase = "";
    for (let i = 0; i < amount; i++){
        phrase += word;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
