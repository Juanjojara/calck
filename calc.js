function add(numbers){
    if (numbers.length === 0){
        return 0;
    }
    if (numbers.length > 0){
        return parseInt(numbers);
    }
}

module.exports = add;