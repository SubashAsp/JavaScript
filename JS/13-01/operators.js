// increment
let number = 5
number++
console.log(number)

// usergivenValue
let incrementNumber = document.getElementById("incrementOperator")
let result = document.getElementById("incrementResult")
function increment(){
    console.log("Increment")
    let num = parseFloat(incrementNumber.value)
    num++
    console.log(num)
    result.textContent = num
}

// decrement
let decrementNumber = document.getElementById("decrementOperator")
let decrementResult = document.getElementById("decrementResult")
function decrement(){
    console.log("Decrement")
    let num = parseFloat(decrementNumber.value)
    num--
    console.log(num)
    decrementResult.textContent = num
}