console.log("Booleans")

// What is a Boolean?
// Boolean Values
console.log(0===0)
console.log(2===3)
console.log(Boolean([]))

// How Boolean Values Are Made 
const isTrue=2>4>-1;// false = 0
const isTrue2=4>7
console.log(isTrue)
console.log(isTrue2)

console.log(!!"")

console.log(Array.isArray(23))
console.log("temp".includes("o"))


// Truthy & Falsy
// Falsy values: false, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, NaN
const isFalse=Boolean({})
console.log(isFalse)


// Truthy values: Everything else! (words, numbers that are not 0, objects, arrays, even Infinity and -Infinity)
let arr=[]
if(arr.length){
    console.log("if")
}else{
    console.log("else")
}

// Boolean Operations - AND, OR, NOT (The Logic Trio)
const bools=44 && 0 && 5;
console.log(bools)
// Common Pitfalls
// Boolean Methods
// Best Practices
// Key Takeaways

