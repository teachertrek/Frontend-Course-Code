console.log("Type Coersion Part 1");
// What is Type Coercion in JavaScript?

// Implicit Coercion 
console.log(typeof (5 + '5'))
console.log(4 + true)
console.log([2] + [4])
// Explicit Coercion
const num=Number("123")
const num2=+"67"
console.log(num2)
console.log(typeof num)
const str=String(123)
console.log(typeof str)
const bool=Boolean("")
console.log(bool)
let num3=123
console.log(typeof num3.toString())
// console.log()
// Type Coercion in Comparisons

console.log(5 == '5')
console.log(2==='2')
console.log(null===undefined)
// Type Coercion and Comparisons (`==` vs `===`)
// When to Use `==` vs `===`:


