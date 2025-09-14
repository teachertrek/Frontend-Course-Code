// Iterable

// const array = "hello"[Symbol.iterator]();
// console.log(array.next());
// console.log(array.next());
// console.log(array.next());
// console.log(array.next());
// console.log(array.next());
// console.log(array.next());
// console.log(array.next());

// for (const element of array) {
//     console.log(element)
// }
// const str=new String("hello")[Symbol.iterator]()
// console.log(str);

// const num=78[Symbol.iterator]()
// console.log(num)

// const obj={
//     name:"prakash"
// }[Symbol.iterator]
// console.log(obj);

// for (const element of num) {
//     console.log(element);

// }
// [Symbol.iterator]()
// console.log(str);

// [Symbol.iterator]()
// console.log(arr)

// For...of Loop

// Built-in Iterables

// Checking if Object is Iterable

// function isIterable(val) {
//   if (val !== null && val !== undefined
//      && typeof val[Symbol.iterator] === "function")
// return true;
//   return false;
// }
// console.log(isIterable(new Set([1,2,3])))

// Iterator

// Array.from
// const arr1=[1,2,3,4]
// console.log(arr1)

// function test(){
//     console.log(arguments);
//     const arr=Array.from(arguments)
// console.log("i am inside fun",arr)

// }
// test(3,4,5,6)

// Calling an Iterator Explicitly

const str = "hello"[Symbol.iterator]();
while (true) {
  const res = str.next();
  if (res.done) break;
  console.log(res);
}

// Iterator Protocol

// Iterable vs Iterator

// Note : Infinite Iterators are also Possible

try {
  setTimeout(() => {
    console.log(age);
  });
} catch (error) {
  console.log(error);
}


