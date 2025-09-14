
// 1. Array Destructuring
// let arr=[1,2,3]
// const firstEle=arr[0]
// const secondEle=arr[1]
// 1.1 Ignore elements using commas

// const [firstEle, ,,secondEle]=arr
// console.log(firstEle)
// console.log(secondEle)
// console.log(arr);


// 1.2 Works with any iterable on the right-side
 
// const str=new Set([1,2,3,4,7])
// const [,char1, ,,char2]=str
// console.log(char1);
// console.log(char2);



// 1.3 Assign to anything at the left-side
let arr=["Prakash", 20]
const obj={};
[obj.name, obj.age]=arr
// console.log(obj);


// 1.4 Looping with .entries()
// const map=new Map([[1,2],[3,4]])
// for (const [key, value] of map.entries()) {
//   console.log(key, value);
  
// }
// 1.5 Swap variables trick

let num1=2
let num2=3;
[num1, num2]=[num2, num1] // [3, 2]
// console.log(num1, num2);


// 2. Rest 
let arr1=[1,2,3,4,5,6]
// let [first, second, ...rest]=arr1
// console.log(first);
// console.log(second);
// console.log(rest);






// 3. Default Value
const arr2=[1,2, 3]
// const [first, second, third='i am default']=arr2
// console.log(first);
// console.log(second);
// console.log(third);

// Array Destructuring
const str="hello"
let [first,, second]=str
console.log(first,  second);
// h l














