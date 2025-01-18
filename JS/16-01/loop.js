console.log("for loop");
// standard for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//
console.log("");

console.log("looping through collection - for..of");
// for...of
let a = [1, 2, 3, 4, 5, 6];
for (let a1 of a) {
    console.log(a1);
}
//
console.log("");

console.log("for...in");
// for...in
let detail = {
    person: "karthi",
    age: 22,
    city: "Erode"
};
for (let key in detail) {
    console.log(key);
}
// printing with values
for (let key in detail) {
    console.log(detail[key]);
}
// with key and value
for (let key in detail) {
    console.log(key + ": " + detail[key]);
}
//for...each
let a1 = [1, 2, 3, 4, 5];
a1.forEach(function(a1){
    console.log(a1 * 2);
} )
// 

console.log("");

console.log("breaking loops");
// breaking loops
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
// 
console.log("");

console.log("continue");
// continue
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}
// 
console.log("");

console.log("while loop");
// while loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// 
console.log("");

console.log("do...while");
// do...while
let j = 0;
do{
    console.log(j);
    j++;
} while(j <= 10)