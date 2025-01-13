// toGetFixedPointValues
const lotsOfDecimal = 1.765432;
const twoDecimalPlaces = lotsOfDecimal.toFixed(3);
console.log(twoDecimalPlaces)

// convertingToNumberDataType
let myNumber = "74";
console.log(typeof (myNumber))
myNumber = Number(myNumber) + 3;
console.log(myNumber)

// calculator
let firstNumber1 = document.getElementById("saiguru_2a10")
let secondNumber2 = document.getElementById("secondNumber")
let calResult = document.getElementById("calResult")
// add
function add() {
    console.log("add")
    let num1 = parseFloat(firstNumber1.value)
    let num2 = parseFloat(secondNumber2.value)
    let add = num1 + num2
    console.log(add)
    calResult.textContent = "sum of the numbers :" + add
}
// subtract
function subtract() {
    console.log("subtract")
    let num1 = parseFloat(firstNumber1.value)
    let num2 = parseFloat(secondNumber2.value)
    let subtract = num1 - num2
    console.log(subtract)
    calResult.textContent = "Different of the numbers :" + subtract
}

// multiply
function multiply(){
    console.log("Multiply")
    let num1 = parseFloat(firstNumber1.value)
    let num2 = parseFloat(secondNumber2.value)
    let multiply = num1 * num2
    console.log(multiply)
    calResult.textContent = "Product of the numbers :" + multiply
}

// division
function division(){
    console.log("Division")
    let num1 = parseFloat(firstNumber1.value)
    let num2 = parseFloat(secondNumber2.value)
    let division = num1 / num2
    console.log(division)
    calResult.textContent = "Division of two numbers :" + division
}

// modulo
function moduls(){
    console.log("Modulo")
    let num1 = parseFloat(firstNumber1.value)
    let num2 = parseFloat(secondNumber2.value)
    let modulo = num1 % num2
    console.log(modulo)
    calResult.textContent = "Modulo of two numbers :" + modulo
}

// exponent
function exponent(){
    console.log("Exponent")
    let num1 = parseFloat(firstNumber1.value)
    let num2 = parseFloat(secondNumber2.value)
    let exponent = num1 ** num2
    console.log(exponent)
    calResult.textContent = "Exponent of two numbers :" + exponent
}