let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let addButton = document.getElementById("addButton");
let subtractButton = document.getElementById("subtractButton");
let multiplyButton = document.getElementById("multiplyButton");
let divideButton = document.getElementById("divideButton");
let resultSpan = document.getElementById("result");

function add() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 + num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

function subtract() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 - num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

function multiply() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 * num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

function divide() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        let result = num1 / num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas inválidas";
    }
}

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
