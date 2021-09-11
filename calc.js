function add(numbers){
    if (numbers.length === 0){
        return 0;
    }
    if (numbers.length > 0){
        var regExpString = '[,\n]';
        if (numbers.startsWith('//')){
            regExpString = calculateNewRegExp(numbers);
            numbers = calculateNewNumbers(numbers);
        }
        const numberList = numbers.split(new RegExp(regExpString));
        return addFromAray(numberList);
    }
}

function addFromAray(numberList){
    var result = 0;
    checkNegativeNumbers(numberList);
    numberList.forEach(element => {
        result += parseInt(ignoreBigNumber(element));
    });
    return result;
}

function calculateNewRegExp(numbers){
    return '[' + numbers[2] + '\n]';
}

function calculateNewNumbers(numbers){
    return numbers.substring(numbers.indexOf('\n')+1);
}

function checkNegativeNumbers(numberList){
    var negativeNumbersMsg = 'negatives not allowed: ';
    var foundNegativeNumbers = false;
    numberList.forEach(element => {
        if (parseInt(element)<0){
            negativeNumbersMsg += element + ',';
            foundNegativeNumbers = true;
        }
    });
    if (foundNegativeNumbers){
        throw new Error(negativeNumbersMsg.slice(0, -1));
    }
}

function ignoreBigNumber(number){
    if (parseInt(number)<=1000){
        return number;
    }
    return 0;
}

module.exports = add;