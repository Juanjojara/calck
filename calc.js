function add(numbers){
    if (numbers.length === 0){
        return 0;
    }
    if (numbers.length > 0){
        const numberList = numbers.split(",");
        if (numberList.length === 1){
            return parseInt(numberList[0]);
        }else{
            return parseInt(numberList[0]) + parseInt(numberList[1]);
        }
    }
}

module.exports = add;