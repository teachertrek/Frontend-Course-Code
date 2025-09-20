// What Is Call & Why ?
// Normal Call Example
/* const num1=new Number(67)
 console.log(num1); */

// function printMyname(city,arr){
//   console.log(city);
//   console.log(arr);

//   console.log(this);

// }
// const user1={
//   name:'Prakash',
//   age:20
// }
//  const user2={
//   name:'Akash',
//   age:21
// }

// printMyname.call(user2,'Delhi',[1,2,3])

// Syntax = call(context,"hello",89,{name:"raj"})
// Borrowing Example
// const user1 = {
//   name: "Prakash",
//   age: 20,
//   printMyName: function () {
//     console.log(this);
//   },
// };
// const user2={
//   name:'Akash',
//   age:21
// }
// user1.printMyName.call(user2)

// Apply

// function printMyname(city,arr){
//   console.log(city);
//   console.log(arr);

//   console.log(this);

// }
// const user1={
//   name:'Prakash',
//   age:20
// }
//  const user2={
//   name:'Akash',
//   age:21
// }
// printMyname.apply(user2,['Delhi',[1,2,3]])

// Bind
// const user={
//   name:"Prakash",
//   printMyName:function(){
//     console.log(this);

//   }
// }
// const fun=user.printMyName
// fun()

function printMyname(city, arr) {
  console.log(city);
  console.log(arr);

  console.log(this);
}
const user1 = {
  name: "Prakash",
  age: 20,
};
const user2 = {
  name: "Akash",
  age: 21,
};
printMyname.call(null, "Delhi", [1, 2, 3]);


    let str = null;
    console.log(str ?? "Default");
    // Default
    let num = 67;
    const res = num ?? 100;
    console.log(res);

    // 67


    



