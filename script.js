

const numberSum = (a,b) => {
    return (a+b);
}

const lastThreeCharacters = (string) => {
  let stringLength = string.length;
  if (stringLength < 3) return
  else return (string.slice(stringLength - 3, stringLength));
}

const numberIntoArray = (number) => {
    let string = number.toString();
    let numberArray = [];
    if (typeof number != 'number' || number == '') return;
    else {
        for (let digit of string) {
            numberArray.push(digit);
        }
    }
    return numberArray;
}

const lastArrayElements = (array, n) => {
    let arrayLength = array.length;
    let newArray = array.slice(array.length - n, array.length);
    return newArray;
}

const mergedArray = (firstArray, secondArray) => {
    let mergedArray = firstArray.concat(secondArray);
    let uniqueArray = [...new Set(mergedArray)];
    uniqueArray =  uniqueArray.sort((function (a, b) { return (a - b) })).reverse();
    return uniqueArray;
}

const hasKey = (object, key) => {
    return (object.hasOwnProperty(key))
}

