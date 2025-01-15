let string = "This is a string"
console.log(string)

// single, double, backtick to declare string
let single = 'single quotes'
let double = "double quotes"
let backtick = `Backtick`
console.log(single)
console.log(double)
console.log(backtick)

// embedding in string
let name = "subash";
let greeting = `Hello, ${name}`;
console.log(greeting)

// concatenation of string
let userName = "subash"
let template = "Welcome"
console.log(template+ ", "+userName)

// using quotes
let quote1 = 'My name is "Subash"'
console.log(quote1)
// using escape characters
let quote2 = 'I\'ve got no right'
console.log(quote2)

// concatenate number & strings
let name1 = "Route "
let number = 66
console.log(name1 + number)

// length of the string
let stringLength = "God zilla"
let lnt = stringLength.length
console.log(lnt)

// retriving a specific character
console.log(stringLength[5])

// Testing if contains a substring
if(stringLength.includes("zilla"))
{
    console.log("found zilla !")
}
else{
    console.log("No zilla here ?")
}

// finding the position of substring
console.log(stringLength.indexOf("zilla"))
// if the substring is not present
console.log(stringLength.indexOf("b"))

// extracting a substring
console.log(stringLength.slice(1, 4))
console.log(stringLength.slice(0, stringLength.length - 1))

// changing to upperCase
console.log(stringLength.toUpperCase())
// changing to lowercase
console.log(stringLength.toLowerCase())

// updating parts of string
let str = "Godzilla"
let updatedStr = str.replace("God", "Mo")
console.log(updatedStr)