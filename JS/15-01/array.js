// array
let animals = ["cat","dog","pig"]
console.log(animals.length)

// adding elements in array
animals.push("cow","goat")
console.log(animals.length)

// printing Array
console.log(animals)

// gettingIndexValues
console.log(Object.keys(animals))

// printingArray usingIndex
console.log(animals[0])
console.log(animals[animals.length - 1])

// settingSeperateIndex
animals[6] = "Chicken";
console.log(animals)

// increasingLength
animals.length = 10
console.log(animals)
console.log(animals[8])

// decreasingLength
animals.length = 6
console.log(animals)
console.log(animals[5])

// Array constructor
console.log("Array constructor")
// length 
let a = new Array(2)
console.log(a.length);
console.log(a[0])
console.log(0 in a)
console.log(1 in a)

// passing in the values
let b = new Array("2")
console.log(b.length)
console.log(b[0])

console.log("")
// arrayMethods
console.log("Array Methods")
console.log("concat")

// array concat()
let array1 = [1, 2, 3,];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(array3)

// concat sparse
let firstArray = [1, , 2, ,3,]
let secondArray = [ ,4, ,5, ,6]
console.log(firstArray.concat(secondArray))

// concat on non array object
console.log(Array.prototype.concat.call({}, 1, 2, 3));
console.log(Array.prototype.concat.call(1, 2, 3));

console.log("")
// copyWithin
console.log("copywithin")

// copywithin
let array01 = ["a","b","c","d","e"]
console.log(array01.copyWithin(0,2,4)) //target,starting,ending
console.log(array01.copyWithin(1,3))  //target,starting
console.log(array01.copyWithin(2))  

// using copywithin on sparse array
let array02 = [1, , 2]
console.log(array02.copyWithin(1,0,1))

console.log("")
// indexof
console.log("indexof()")
let insect = ['ant', 'grasshopper', 'bettle', 'ladybug', 'bullet ant']
console.log(insect.indexOf('bettle'))  //searchElement
console.log(insect.indexOf('ladybug', 1)) //searchElement, fromIndex
console.log(insect.indexOf('fly'))

console.log("")
// at()
console.log("at()")
let d = [1, 2, 3, 4, 5];
let idx1 = 3;
let idx2 = -1;
console.log(d.at(idx1))
console.log(d.at(idx2))
// console.log(-d.length)
console.log(d.at(-6))
// console.log(d.length)
console.log(d.at(6))

// using in function
let d1 = ["Tamil", "English", "Maths", "Science"]
function lastEle(arr){
    return arr.at(-1)
}
let item = lastEle(d1)
console.log(item)

console.log("")
// push()
console.log("push()")

let e = ["a", "b", "c", "d"]
e.push("e")
console.log(e)
let e3 = [1, 2, 3, 4];
e3.push(5)
console.log(e3)

// merging two arrays
let e1 = [1, 2]
let e2 = [3, 4]
e1.push(...e2)//spread operator
console.log(e1)

console.log("");
// pop()
console.log("pop()")

let f = [1, 2, 3, 4, 5];
f.pop();
console.log(f)

console.log("");
// shift()
console.log("shift()");

let g = [1, 2, 3, 4, 5]
g.shift();
console.log(g);

console.log("");
// unshift()
console.log("unshift()")

let h = [1, 2, 3, 4, 5]
h.unshift(0);
console.log(h)

console.log("")
// splice()
console.log("splice()")

let i = [1, 2, 3, 4];
i.splice(0,0,0)
console.log(i)

// deletecount as negative
let i1 = [1, 2, 3, 4]
i1.splice(0,-1,6)
console.log(i1)

// when deletecount is greater than array length
let i2 = [1, 2, 3, 4, 5]
i2.splice(0,6,7)
console.log(i2)

// to remove all elements from a specific index
let i3 = [1, 2, 3, 4, 5]
i3.splice(1);
console.log(i3);

// splice on sparse array
let i4 = [1, ,3, ,5];
i4.splice(1,2);
console.log(i4);
//
// console.log("")


// console.log("")
// // Array from
// console.log("Array form")
// // Array from a string
// console.log(Array.from('foo'))
// let c = "subash"
// let c1 = Array.from(c)
// console.log(c1)

// // Array from a map

// occurrence of an element
// let occurArray = ["a", "b", "a", "c", "a", "d"]
// let element = "a"
// let indices = []
// let idx = occurArray.indexOf(element)
// while (idx !== -1)
// {
//     indices.push(idx)
//     idx = occurArray.indexOf(element, idx + 1)
// }
// console.log(indices)


