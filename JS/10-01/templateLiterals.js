// basicTemplateLiterals

// preValued
let userName = "subash";
let message = `Hello, ${userName}`
console.log(message)

// userGivenValue
let userGiven = document.querySelector(".value");
let result = document.querySelector(".result");
function buttonClick() {
    result.textContent = `Welcome, ${userGiven.value}`
}

// Multi-line Strings
let multiLine = `This is a
multi-line
string.`;
console.log(multiLine)

// adding two numbers
let firstNumber = 4;
let secondNumber = 5;
console.log(firstNumber + secondNumber)

// adding UserGiven Values
let firstNum = document.getElementById("firstNumber")
let secondNum = document.getElementById("secondNumber")
let resultNum = document.getElementById("resultNum")

function addTwo() {
    let num1 = parseFloat(firstNum.value);
    let num2 = parseFloat(secondNum.value);
    let sum = num1 + num2;
    console.log(typeof(sum));
    console.log(sum);
    resultNum.textContent = " Sum is "+sum;
    
}

// adding two strings
let strOne =document.getElementById("firstName");
let strTwo = document.getElementById("secndName");
let strResult = document.getElementById("str_Result")
console.log(typeof(strOne))

function addStr(){
    console.log(strOne.value);
    strResult.textContent = `${strOne.value + strTwo.value}`;
}
