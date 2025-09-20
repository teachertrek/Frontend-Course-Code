// What is this Keyword

// this is global context
console.log(this === window);

// this Inside a Regular Function
// function test(){
//     console.log(this)
// }
// console.log(window);

// window.test()
// Using this in Nested Functions
// function test(){
//     console.log(this)
//     function test2(){
//         console.log(this)
//     }
//     test2()
// }
// test()
// this Inside an Object Method
// const user={
//     name:"Prakash",
//     age:22,
//     address:{
//         state:"delhi",
//         printMyCity:function(){
//             console.log(this)
//         }
//     },
//     printNyName:function(){
//         console.log(this)
//         function test(){
//             console.log(this)
//         }
//         test()
//     }
// }
// user.address.printMyCity()
// Dynamic Behavior of this

// const user={
//     name:"Prakash",
//     age:22,

//     printNyName:function(){
//         console.log(this)
//     }
// }
// const fun=user.printNyName
// fun()
// this with Arrow Functions
// Arrow Functions inside regular Methods

// const user = {
//   name: "Prakash",
//   age: 22,

//   printNyName: function () {
//     console.log(this);

//     const arrow = () => {
//       console.log(this);
//     };
//     arrow();
//   },
// };
// user.printNyName();

// Comparison arrow fun with Regular Functions
const user = {
  name: "Prakash",
  age: 22,
  arrow: () => {
    console.log(this);
  },

  printNyName: function () {
    console.log(this);
  },
};
// user.arrow();
// this in Event Listeners
const test=()=>{
 console.log(this);
}
const btn=document.getElementById('btn')
btn.addEventListener('click',test)


