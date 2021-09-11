function add(numbers){
    if (numbers.length === 0){
        return 0;
    }
    if (numbers.length > 0){
        var regExpString = calculateRegExp(numbers);
        const numberList = calculateNumbers(numbers).split(new RegExp(regExpString));
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

function calculateRegExp(numbers){
    if (numbers.startsWith('//')){
        return '[' + numbers[2] + '\n]';
    }
    return '[,\n]';
}

function calculateNumbers(numbers){
    if (numbers.startsWith('//')){
        return numbers.substring(numbers.indexOf('\n')+1);
    }
    return numbers;
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