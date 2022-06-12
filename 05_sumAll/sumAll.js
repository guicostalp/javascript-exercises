const sumAll = function(...arg) {

    addNumber = 0;
    firstNumber = arg[0];
    secondNumber = arg[1];
    lowerNumber = firstNumber;
    largerNumber = secondNumber;


    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
        return 'ERROR';
    }

    if (firstNumber < 0 || secondNumber < 0) {

        return 'ERROR';
    }

        if (secondNumber < firstNumber){

            lowerNumber = secondNumber;
            largerNumber = firstNumber;


        }    

        for (let i=lowerNumber; i <= largerNumber ; i++) {
            addNumber += i;
        }

        return addNumber;       


};

// Do not edit below this line
module.exports = sumAll;
