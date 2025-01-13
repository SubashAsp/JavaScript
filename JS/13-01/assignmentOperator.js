// assignment operators
// addition assignment
let x = 5;
x += 4;
console.log(x)

// subtraction assignment
let y = 5;
y -= 4;
console.log(y)

// multiplication
let z = 4;
z *= 4;
console.log(z)

// division
let p = 4;
p /= 2;
console.log(p)

// userGivenValue
// addition assignment
let firstNumber = document.getElementById("firstNumber")
let assignNumber = document.getElementById("assignedNumber")
let result = document.getElementById("assignResult")

function addAssign() {
    console.log("Add")
    let num1 = parseFloat(firstNumber.value)
    let num2 = parseFloat(assignNumber.value)
    num1 += num2;
    console.log(num1)
    result.textContent = num1;
}

// subtractAssignment
function subAssign() {
    console.log("Subtract")
    let num1 = parseFloat(firstNumber.value)
    let num2 = parseFloat(assignNumber.value)
    num1 -= num2
    console.log(num1)
    result.textContent = num1
}

// multiply
function multiAssign() {
    console.log("multiply")
    let num1 = parseFloat(firstNumber.value)
    let num2 = parseFloat(assignNumber.value)
    num1 *= num2
    console.log(num1)
    result.textContent = num1
}

// division
function divAssign(){
    console.log("Division")
    let num1 = parseFloat(firstNumber.value)
    let num2 = parseFloat(assignNumber.value)
    num1 /= num2
    console.log(num1)
    result.textContent = num1
}