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