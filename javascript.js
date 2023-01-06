function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    return operator(x, y);
}

function updateNumbers(char, storedNum, currentNum, displayDiv) {
    if (storedNum == Infinity) {
        storedNum = char;
        displayDiv.textContent = storedNum;
    } else {
        currentNum = char;
    }
    console.log({storedNum});
    return (storedNum, currentNum);
} 


function updateOperator(char) {
    switch(char) {
        case '+':
            return add;
        case '-':
            return subtract;
        case '×':
            return multiply;
        case '÷':
            return divide;
    }        
}



function display(char, storedNum, currentNum, operator, result) {
    

    

}

const displayDiv = document.querySelector("#display");
let storedNum = Infinity;
let currentNum = Infinity;
let operator;
let result;

if (char === 'clear') {
    storedNum = Infinity;
    currentNum = Infinity;
    operator = undefined;
} else if (char === '=') {
    console.log({operator});
    result = operate(operator, storedNum, currentNum);
    displayDiv.textContent = result;
    storedNum = result;
} else if (typeof(char) == "string") {
    operator = updateOperator(char);
    console.log({operator});
} else {
    storedNum, currentNum = updateNumbers(char, storedNum, currentNum, displayDiv);
}


document.getElementById("1").onclick = function fun()