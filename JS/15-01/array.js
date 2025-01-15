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

// occurrence of an element
let occurArray = ["a", "b", "a", "c", "a", "d"]
let element = "a"
let indices = []
let idx = occurArray.indexOf(element)
while (idx !== -1)
{
    indices.push(idx)
    idx = occurArray.indexOf(element, idx + 1)
}
console.log(indices)


