function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    return operator(x, y);
}

function updateNumbers(char, storedNum, currentNum, displayDiv) {
    if (storedNum == undefined) {
        storedNum = char;
        displayDiv.textContent = storedNum;
    } else {
        currentNum = char;
        displayDiv.textContent = `${storedNum} ${operatorIcon} ${currentNum}`;
    };
    return [storedNum, currentNum];
} 

const displayDiv = document.querySelector("#display");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const add = document.getElementById("+");
const subtract = document.getElementById("-");
const multiply = document.getElementById("×");
const divide = document.getElementById("÷");
const equal = document.getElementById("=");
const clear = document.getElementById("clear");

let storedNum;
let currentNum;
let operator;
let result;
let operatorIcon;

one.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(1, storedNum, currentNum, displayDiv);
})

two.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(2, storedNum, currentNum, displayDiv);
})

three.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(3, storedNum, currentNum, displayDiv);
})

four.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(4, storedNum, currentNum, displayDiv);
})

five.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(5, storedNum, currentNum, displayDiv);
})

six.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(6, storedNum, currentNum, displayDiv);
})

seven.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(7, storedNum, currentNum, displayDiv);
})

eight.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(8, storedNum, currentNum, displayDiv);
})

nine.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(9, storedNum, currentNum, displayDiv);
})

zero.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(0, storedNum, currentNum, displayDiv);
})

add.addEventListener("click", function() {
    operator = addition;
    operatorIcon = '+';
})

subtract.addEventListener("click", function() {
    operator = subtraction;
    operatorIcon = '-';
})

divide.addEventListener("click", function() {
    operator = division;
    operatorIcon = '÷'
})

multiply.addEventListener("click", function() {
    operator = multiplication;
    operatorIcon = 'x';
})

clear.addEventListener("click", function() {
    storedNum = undefined;
    currentNum = undefined;
    operator = undefined;
    displayDiv.textContent = 0;
})

equal.addEventListener("click", function() {
    result = operate(operator, storedNum, currentNum);
    displayDiv.textContent = result;
    storedNum = result;
} )
