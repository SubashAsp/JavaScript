// conditional statements

// if....else
let chicken = 'egg';
let decision;
if (chicken === "egg") {
    decision = 'keep it'
}
else {
    decision = 'sell'
}
console.log(decision)

// else.........if
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === "sunny") {
        para.textContent = "It is nice and sunny outside today.";
    }
    else if (choice === "rainy") {
        para.textContent = "Rain is falling outside."
    }
    else if (choice === "snowing") {
        para.textContent ="The snow is coming down."
    }
    else if (choice === "overcast") {
        para.textContent ="It isn't raining but take the rain coat just in case."
    }
    else {
        para.textContent = "";
    }
}

// switch case
let expression = 2;
switch(expression)
{
    case 1:
        console.log("one")
        break

    case 2:
        console.log("two")
        break

    case 3:
        console.log("three")

    default :
        console.log("undefined");
        
}

// ternary operator
let name1 = "subash"
let name2 = "karthi"
name1 === "subash" ? console.log(true) : console.log(false)