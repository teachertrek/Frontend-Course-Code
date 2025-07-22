console.log("Function Continue...")
// Anonymous Function
// setTimeout(function(){
//     console.log("I am anonymous function")
// },2000)
// Function Expression

let printHelloWorld=function(num1, num2, num3=7){
    console.log(num1+num2+num3 )
}
printHelloWorld(2,3)

let add=function sum(num1){
    if(num1===1){
        return 1
    }
    return sum(num1-1)+num1
}
console.log(add(10))


// sum(3,4)

// A Function is a value

function outerFun(){
    return function inner(){
        console.log("I am inner fun")
    }
}
const fun1=outerFun()
fun1()

let arr=[1,2,function(){}, 8]
console.log(arr)

let user={
name:"Praksh",
address:function(){
    console.log("Delhi")
}
}
user.address()


// Arrow Function

const subtract=(num1,num2, num3=2)=>{
    // console.log()
    return num1+num2+num3
}
console.log(subtract(9,8));

// IIFE 
const myName=(function(name){
    return name
})("Prakash")
console.log(myName)
let age;
age()