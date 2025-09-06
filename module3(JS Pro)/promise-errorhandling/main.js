// const promise = new Promise((res, rej) => {
//   res("get data");
// });

// // console.log(promise.then())
// promise.catch(err=>err+' please fix')
// .then(res=>{
//     console.log("res1",res)
//     return 89
// })
// .catch(err=>console.log("err2",err))
// .then(res=>console.log("res2",res))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(jsonn))
//       .catch(err=>console.log("err",err))


new Promise(function() {
  noSuchFunction(); // Error here (no such function)
})
  .then(() => {
    // successful promise handlers, one or more
  }); // without .catch at the end!





