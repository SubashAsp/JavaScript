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
let select = document.querySelector("select");
let para = document.querySelector("p");

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

// nesting if ... else
let select1 = document.getElementById("weather2");
let temperature = document.getElementById("temp");
let result = document.getElementById("result");
temperature.addEventListener("input",setWeather2);
select1.addEventListener("change",setWeather2);
function setWeather2(){
    let choice = select1.value;
    let temp = parseFloat(temperature.value);
    // console.log(temp);
    if(choice === "sunny"){
        if(temp <85){
            result.textContent = "Great day to go to beach😊.";
        }
        else{
            result.textContent = "Hot day, avoid going out.";
        }
    }
    // logical statement
    else if(choice === "snowing"){
        if(temp >= 0  && temp <=32){
            result.textContent = "Great its snowing.";
        }
        else if(temp < 0){
            result.textContent = "Its cold out there 🥶.";
        }
        else{
            result.textContent = "It is a warm day."
        }
    }
}

console.log("");
// switch case
console.log("switch case");
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

console.log("");
// ternary operator
console.log("tenary operator")
let name1 = "subash"
let name2 = "karthi"
name1 === "subash" ? console.log(true) : console.log(false)