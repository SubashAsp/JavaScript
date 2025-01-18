// invoking a function
function myFunction() {
    console.log("Hello !");
}
myFunction()

// optional parameter
let myArray = ["I", "love", "chocolate", "frogs"];
let madeAString = myArray.join(" ");//with parameter
console.log(madeAString);

const madeAnotherString = myArray.join();//without parameter
console.log(madeAnotherString);

// default parameter
function hello(name = "subash") {
    console.log(name);
}
hello("karthi");
hello();

// Anonymous function
let greet = function (name) {
    console.log(name);
}
greet("karthi");

// arrow function
let greet1 = (name1) => {
    console.log(name1);
}
greet1("subash");