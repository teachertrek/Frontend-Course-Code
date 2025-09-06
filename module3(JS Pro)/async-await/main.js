// Async

// Ex 1 Actual
// async function test() {

//    return 1
// }

// console.log(test())
// test().then(res=>console.log("res",res))
// .catch(err=>console.log(err))

// behind the scene
// function test(){
//      return new Promise((res, rej)=>{
//           res(undefined)
//      })
// }

// test().then(res=>console.log("res",res))
// .catch(err=>console.log(err))

// Above is same as

// async function f() {
//   return Promise.reolve(1,2,3);
// }

// Ex 1 Internal

// function test1() {
//   return new Promise((resolve, reject) => {
//     resolve(1);
//   });
// }
// test1().then(res=>console.log("res",res))
// .catch(err=>console.log(err))

// Ex 2 Actual
// async function test() {
//      let a=4
//      let b=2
//      return undefined

// }
// test().then(res=>console.log(res))

// Ex 2 Internal

// function test1() {
//   return new Promise((resolve, reject) => {
//     let a = 4;
//     let b = 2;

//     resolve(undefined);
//   });
// }
// test1().then(res=>console.log(res))

// Await

// Ex3 Actual Code

// async function test() {
//   let a = await new Promise((res)=>{
//      setTimeout(()=>{
//           res("Get Data")
//      },3000)
//   });
//   console.log("a:", a);

// }
// test().then(res=>console.log("res",res))

// Ex 3 Internal
// function test() {
//   return new Promise((resolve, reject) => {
//     Promise.resolve(42)
//       .then(a => {
//         console.log("a:", a);
//         resolve(undefined);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// }

// Ex 4 Actual Code
// async function test() {
//   console.log("before");

//   let a = await Promise.reject("something went wrong");
//   console.log("a:", a);

// }
// test().catch(err=>console.log(err));

// Ex 4 Internal
// function test() {
//   return new Promise((resolve, reject) => {
//     Promise.reject("something went wrong")
//       .then((a) => {
//         console.log("a:", a);
//         resolve(undefined);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// What will happen when if we put await in front
// of non-promise value, lets discuss

// async function test() {
//     const a= await 1 // await Promsie.resolve(1)
//     console.log(a)
// }
// test()

// Ex 5 Actual Code
// async function test() {
//   try {
//     let b = await Promise.reject("failed!");
//     console.log("b:", b);
//   } catch (err) {
//     console.log("Caught error:", err);
//   }
// }
// test();

// Ex 5 Internal
// function test() {
//   return new Promise((resolve, reject) => {
//     Promise.reject("failed!")
//       .then(b => {
//         console.log("b:", b);
//         resolve(undefined);
//       })
//       .catch(err => {
//         console.error("Caught error:", err);
//         resolve(undefined);
//       });
//   });
// }

// not using await simply it is called
// Ex 6 Actual

// async function test(){
//      console.log("Hello");

//       new Promise(res=>{
//           console.log("hello1")
//           setTimeout(() => {

//           }, 3000);
//      })
//      console.log("hi");

// }
// test().then(res=>console.log("res",res))
// Ex 6 Internal
// function test() {
//   return new Promise((resolve, reject) => {
//     console.log("Hello");

//     new Promise(res => {
//       console.log("hello1");
//       setTimeout(() => {

//       }, 3000);
//     });

//     console.log("hi");

//     resolve(undefined); // outer async function promise resolves immediately
//   });
// }

// Ex 7 Actual
// async function test() {
//   await new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("get Data1");
//     }, 1000);
//   });
//   console.log("I will log after one sec");

//   await new Promise((res, rej) => {
//     setTimeout(() => {
//       res("get Data2");
//     }, 2000);
//   });
//   console.log("I will log after two sec");
// }
// test();

// Ex 7 Internal
// function test() {
//   return new Promise((resolve, reject) => {
//     new Promise((res) => {
//       setTimeout(() => {
//         res("data2");
//       }, 90);
//     })
//       .then(() => {
//         return new Promise((res) => {
//           setTimeout(() => {
//             res("data2");
//           }, 90);
//         });
//       })
//       .then(() => {
//         resolve(undefined);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

//Note 1 :  await pause the asyun fun until promise is settled
//if we dont call res(2) inside setTimeout hi will never
//log
// async function test() {
//   console.log("Hello");

//   await new Promise((res) => {
//     setTimeout(() => {

//     }, 2000);
//   });
//   console.log("hi");
// }
// test();

// Note 2 :
// await only pauses the async function after the promise
//  is created, not the code inside the promise constructor.
// console.log("one")
// async function test() {
//      console.log("two")
//      await new Promise((res)=>{
//           console.log("three");

//           setTimeout(() => {
//                res(2)
//           }, 2000);
//      })
//      console.log("four");

// }
// console.log("five")
// test()
// console.log("six")

// async function getData(params) {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await res.json();
//   console.log(data);
// }
// getData();

// Example using fetch & promise chaning
// Async-Await Us
// ing in IIFE, Arrow Fun & Function expression

// (async function(){
    
// })()
// const myFun=async()=>{
//  const a=await 1
//      console.log(a)
// }
// myFun()
const myFun= async function(){
 const a=await 1
     console.log(a)
}
myFun()
