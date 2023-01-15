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

function updateNumbers(char, storedNum, currentNum, displayDiv, operator) {
    let storedNumString;
    let currentNumString;

    if (storedNum == undefined) {
        storedNumString = ''; 
    } else {
        storedNumString = storedNum.toString();
    }

    if (currentNum == undefined || Number.isNaN(currentNum)) {
        currentNumString = '';
    } else {
        currentNumString = currentNum.toString();
    }

    if (operator == undefined) {
        if (decimal_on === true) {
            storedNumString += '.';
            storedNumString += char.toString();
            displayDiv.textContent = storedNumString;
            decimal_on = false;
        } else {
            storedNumString += char.toString();
            displayDiv.textContent = storedNumString;
        }
        
    } else {
        if (decimal_on === true) {
            currentNumString += '.';
            currentNumString += char.toString();
            displayDiv.textContent = `${storedNum} ${operatorIcon} ${currentNumString}`;
        } else {
            currentNumString += char.toString();
            displayDiv.textContent = `${storedNum} ${operatorIcon} ${currentNumString}`;
        }
        
    };
    return [parseFloat(storedNumString), parseFloat(currentNumString)];
} 

const displayDiv = document.querySelector("#text");
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
const decimal = document.getElementById("decimal");

let storedNum;
let currentNum;

let operator;
let result;
let operatorIcon;
let decimal_on = false;

one.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(1, storedNum, currentNum, displayDiv, operator);
})

two.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(2, storedNum, currentNum, displayDiv, operator);
})

three.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(3, storedNum, currentNum, displayDiv, operator);
})

four.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(4, storedNum, currentNum, displayDiv, operator);
})

five.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(5, storedNum, currentNum, displayDiv, operator);
})

six.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(6, storedNum, currentNum, displayDiv, operator);
})

seven.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(7, storedNum, currentNum, displayDiv, operator);
})

eight.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(8, storedNum, currentNum, displayDiv, operator);
})

nine.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(9, storedNum, currentNum, displayDiv, operator);
})

zero.addEventListener("click", function() {
    [storedNum, currentNum] = updateNumbers(0, storedNum, currentNum, displayDiv, operator);
})

decimal.addEventListener("click", function() {
    decimal_on = true;
})

add.addEventListener("click", function() {
    if (operator != undefined) {
        result = operate(operator, storedNum, currentNum);
        displayDiv.textContent = result;
        storedNum = result;
        currentNum = undefined;
    }
    operator = addition;
    operatorIcon = '+';
})

subtract.addEventListener("click", function() {
    if (operator != undefined) {
        result = operate(operator, storedNum, currentNum);
        displayDiv.textContent = result;
        storedNum = result;
        currentNum = undefined;
    }
    operator = subtraction;
    operatorIcon = '-';
})

divide.addEventListener("click", function() {
    if (operator != undefined) {
        result = operate(operator, storedNum, currentNum);
        displayDiv.textContent = result;
        storedNum = result;
        currentNum = undefined;
    }
    operator = division;
    operatorIcon = '÷'
})

multiply.addEventListener("click", function() {
    if (operator != undefined) {
        result = operate(operator, storedNum, currentNum);
        displayDiv.textContent = result;
        storedNum = result;
        currentNum = undefined;
    }
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
    operator = undefined;
} )
