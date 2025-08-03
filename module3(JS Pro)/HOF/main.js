console.log("number");

// What is higher-order functions

// function higherOrderFun() {
//   return function () {
//     let num1 = 2;
//     let num2 = 4;
//     return num1 + num2;
//   };
// }

// const res=higherOrderFun()
// console.log(res())

function higherOrderFun(sumOfTwoNo) {
  let res = sumOfTwoNo();
  console.log(res);
}
function sum() {
  let num1 = 2;
  let num2 = 8;
  return num1 + num2;
}
higherOrderFun(sum);

// ! Arrays method - build-in Higher Order Function
// map()
let arr = [1, 2, 3, 12, 5, 10];
function plusTwo(arrayElement, index, arrayItself) {
  return arrayElement + 2;
}
const res = arr.map(plusTwo);
console.log(res);
// [3, 4, 5, 14, 7, 8]

// filter()
let res1 = arr.filter(
  (arrayElement, index, arrayItself) => arrayElement % 2 === 0
);
console.log(res1);
// [2, 12, 10]

// reduce()
const res2 = arr.reduce(function (acc, arrayElement, index, arrayItself) {
  return acc + arrayElement;
}, 0);
console.log(res2);
//  1 => 3=>
// some()
let arr2 = [10, 1, 4, 6, 9];

const res3 = arr2.findIndex((element) => element === 2);
console.log(res3);

// every()
// find()
// findIndex()
// forEach()

const res4 = arr2.forEach(function (arrayElement, index, arrayItself) {
  console.log(arrayElement);
  arr2[index] = 0;
});
console.log(arr2);

// ? for loop
let arr3 = [1, 4, 6, 7, 8];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

let arr4 = [
  [1, 2, 3],
  [5, 6, 7],
];
for (let i = 0; i < arr4.length; i++) {
  for (let j = 0; j < arr4[i].length; j++) {
    console.log(arr4[i][j])
  }
}

console.log(arr4[1][0]);
// ? sort method

let arr5=[12,5,7,1,2]
arr5.sort(function(a,b){
  return a-b
})
console.log(arr5)
// ? include method
if(arr5.includes(0)){
  console.log("if")
}else{
  console.log("else")
}
