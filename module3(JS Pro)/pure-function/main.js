console.log("Pure Function");
// What are Pure Functions

// pure function
// function sum(num1, num2){
//     return num1 +  num2
// }

// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));
// console.log(sum(1,2));

//  impure
// let num1=2
// function sum( num2){
//     return num1 +  num2
// }

// console.log(sum(1));
// num1=7
// console.log(sum(1));

// Characteristics of Pure Functions
// Impure vs Pure Functions

let arr = [1, 2, 3];
let num = 6;

function newArr(arr, num) {
  
  
  return [...arr,num]
}
console.log(newArr(arr, num));
console.log(newArr(arr, num));
console.log(newArr(arr, num));


console.log(arr);




// Side Effects
// Benefits of Pure Functions
