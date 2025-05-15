
function addition(a, b) {
    return a + b;
}
var result = addition(10, 20)
console.log(result);


// even odd checker

function isEven(num) {
    if (num % 2 == 0) {
        console.log('This is an Even number');

    }
    else {
        console.log('This is an Odd number');
    }
}
isEven(5);

// check Number
function checkNumber(num) {
    return num >= 0 ? "positive" : "negative";
}
console.log(checkNumber(-5));



// celcius to Farenhite

function celsiusToFarenhite(celsius) {
    return (celsius * 9 / 5) + 32
}
console.log(celsiusToFarenhite(36));


// Square finder

function squareFinder(num) {
    return num * num;
}

console.log(squareFinder(5));


// First Charecter Finder

function firstCharacter(str) {
    return str.charAt(0);
}
console.log(firstCharacter('Hello'));


