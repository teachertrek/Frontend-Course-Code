// console.log("hi");
// const promise =
//  new Promise(function (resolve, reject) {
//   console.log("hello");
  
// //   reject("Something went wrong")
//   resolve(2)
//   console.log("ok")
// });
// console.log(typeof promise)
// promise.then(res=>res*2)
// .then(res=>res*3)
// .finally(res=>console.log(res))
// .then(res=>console.log(res))
// console.log(promise.catch(res=>console.log(res)))

// console.log(promise);
// promise.then(res=>console.log("res",res),
// error=>console.log("err",error)
// )
// console.log("bye");

// promise.then(res=>console.log("res",res))
// .catch(error=>console.log("err",error))
// .finally(message=>console.log("I am finally",message))

 const promise=new Promise((res,rej)=>{
  setTimeout(()=>{
    res({name:"prakash",age:26})
  },1000)
 })
 promise.then(res=>console.log(res))

