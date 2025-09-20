// Why Constructor Function

// const user1={
//     name:"Prakash",
//     age:20
// }
// const user2={
//     name:"Akash",
//     age:21
// }
// const user3={
//     name:"Aman",
//     age:22
// }
// Constructor function

// function user(name, age) {
//   this.name = name;
//   this.age = age;

// }
// const user1 = new user("Prakash", 20);
// const user2 = new user("Akash", 21);
// const user3 = new user("Aman", 22);
// console.log(user1);
// console.log(user2);
// console.log(user3);
// Built-In Constructor Function
// const num=new String(89)
// console.log(num);

// With Function Expression
// const User=(name)=>{
//     this.name=name
// }
// const user1=new User('Aman')
// console.log(user1);

// new.terget
// function Test(){
//     if(!new.target){
//         return new Test('Aman')
//     }
//     console.log(this);

// }
// Test()
// return from constructor
// function user(name, age) {
//   this.name = name;
//   this.age = age;
//   return [1,2,3]

// }
// const user1 = new user("Prakash", 20);
// console.log(user1);

// Methods in constructor
function user(name, age) {
  this.name = name;
  this.age = age;
}

user.prototype.printMyName = function () {
  console.log(this.name);
};
// const user1 = new user("Prakash", 20);
// const user2 = new user("Akash", 20);

// console.log(user1);
user2.printMyName();

 
 

function User(name, age) {
  this.name = name;
  this.age = age;
}


const user1 = new User("Prakash", 20);
// {name:'Prakash',age:20}
const user2 = new User("Akash", 21);
// {name:'Akash',age:21}










