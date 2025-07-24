console.log("number")

// What is a Number?

// IEEE 754 double-precision floating-point format.
// Number Types
// const age=20;
// const price=23.78;
// const expoNum=3e2;
// console.log(typeof price)
// const inifinity=-1/0;
// console.log(inifinity)
// const nan=Math.sqrt(-1);
// console.log( nan)

// NaN in JavaScript

// console.log(0/0); // NaN
// console.log(parseInt("hello")); // NaN
// console.log(Math.sqrt(-1)); // NaN
// console.log(undefined + 1); // NaN

// console.log(isNaN(NaN)); // true
// console.log(isNaN("abc")); // true
// console.log(isNaN(42)); // false

// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN("abc")); // false
// console.log(Number.isNaN(0/0)); // true
// console.log(0.1 + 0.2); 
// console.log(0.3 +0.4 )
// console.log(0.1 + 0.7); 
// console.log(0.1 + 0.2 === 0.3); 
// console.log(1e-10)

// Number Pitfalls
// Number Methods and Properties

// let n = 123.45689;
// console.log(n.toFixed(1)); // "123.5"
// console.log(n.toPrecision(5)); // "123.5"
// console.log(n.toString(16)); 
// console.log(n.toExponential(2)); // "1.23e+2"

// // valueOf example:
// let numObj = new Number(42);
// console.log(typeof numObj); // "object"
// console.log(typeof numObj.valueOf()); // 42 (primitive number)
// let numPrim = 42;
// console.log(numPrim.valueOf()); // 42 (primitive, so returns itself)
// Parsing and Converting Numbers
console.log(parseInt("42.89")); // 42
console.log(parseFloat("3.14")); // 3.14
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN
// Math Object

console.log(Math.round(3.49999))
// Best Practices
// Key Takeaways

