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
    numberList.forEach(element => {
        result += parseInt(element);
        if (parseInt(element)<0){
            throw new Error('negatives not allowed: ' + element);
        }
    });
    return result;
}

function calculateNewRegExp(numbers){
    return '[' + numbers[2] + '\n]';
}

function calculateNewNumbers(numbers){
    return numbers.substring(numbers.indexOf('\n')+1);
}

module.exports = add;