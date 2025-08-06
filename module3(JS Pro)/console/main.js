console.log("console");

// What is Console in JavaScript?
console.log(typeof console)
// How to Open the Browser Console?
// Common Uses of the Console
// console.log()
let num1=2;
console.log("%c   this is a number","background-color:red; color:blue; font-size:30px",num1)

function add(num1, num2){
    console.log(num1,num2)
    return num1+num2
}
console.log(add(2,2))
console.info("I am info")
console.warn("This is warning")
// console.error()
console.error("I am error")
// fetch().then().catch(console.error())
// console.table()
const user={
    name:"Prakash",
    age:26
}
console.table(user)

let arrOfObj=[
    {
    name:"Prakash",
    age:26
},
{
    name:"Rahul",
    age:17
}
]
console.table(arrOfObj)

// console.group()

function print(){
    console.group("Inside print function")
    console.log("Hi")
    console.log("hello")
    console.group("Nested inside print func")
     console.log("nested Hi")
    console.log("nested hello")
    console.groupEnd()
    console.groupEnd()
}
print()
console.time()
for(let i=0;i<1000000000;i++){

}
console.timeEnd()
// console.time()
setTimeout(()=>{
console.clear()

},3000)
