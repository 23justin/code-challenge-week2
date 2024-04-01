function primenumber(number){
    if(number === 1  || number === 3|| number === 5|| number === 7|| number === 9) {
        return true;
    } else {
        return false;
    }
}

function filterPrimeNumbers(array) {
    return array.filter(primenumber);
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterPrimeNumbers(inputArray));