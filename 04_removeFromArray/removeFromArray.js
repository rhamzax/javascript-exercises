const removeFromArray = function() {
    let array = arguments[0];

    for (let i = 0; i < arguments.length - 1; i++){
        let index = array.indexOf(arguments[i+1])
        if (index >= 0){
            array.splice(index, 1)
        }
        
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
