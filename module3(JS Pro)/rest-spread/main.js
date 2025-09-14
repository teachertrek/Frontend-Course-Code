
//  Rest parameter

function test(...rest){
// console.log(num1);
// console.log(rest);
// console.log(arguments);



}
test(1,2,3,4,5)

// spread operator
const arr=[1,2,3,4,5]
// console.log(...arr);


// Examples
// 1. With Math.max
console.log(Math.max(...arr))
// 2. merge two array
const arr1=[1,2,9,29,4]
const arr2=[6,7,8]
const res=[...arr1, ...arr2].sort((a,b)=>a-b)
console.log(res);


// Copy array & object

const arr3=[2,3,[1,2],8]
const res2=[...arr3]
console.log(res2)

const user={
    name:"prakash",
    age:20,
    address:{
        city:"Address"
    }

}
const res3={...user}
console.log(res3);

