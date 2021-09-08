function add(numbers){
    if (numbers.length === 0){
        return 0;
    }
    if (numbers.length > 0){
        const numberList = numbers.split(",");
        return addFromAray(numberList);
    }
}

function addFromAray(numberList){
    var result = 0;
    numberList.forEach(element => {
        result += parseInt(element);
    });
    return result;
}

module.exports = add;