// Promise Vs Callback Hell
// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === 123) {
//         resolve({ id: userId, name: "John Doe" });
//       } else {
//         reject("User not found");
//       }
//     }, 1000);
//   });
// }

// function fetchUserPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([{ id: 1, content: "Post 1" }, { id: 2, content: "Post 2" }]);
//     }, 1000);
//   });
// }

// function fetchUserComments(postId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([{ id: 1, text: "Great post!" }, { id: 2, text: "Thanks for sharing!" }]);
//     }, 1000);
//   });
// }

// fetchUserData(123)
//   .then(user => {
//     console.log("User:", user);
//     return fetchUserPosts(user.id);
//   })
//   .then(posts => {
//     console.log("Posts:", posts);
//     return fetchUserComments(posts[0].id);
//   })
//   .then(comments => {
//     console.log("Comments:", comments);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });
// fetch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// Promise API
// Promise.all
// const promiseAll = Promise.all([
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Error is here");
//     }, 2000);
//   }),
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Something went wrong");
//     }, 5000);
//   }),
//   "I am non promise",
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res(4);
//     }, 1000);
//   }),
// ]);
// promiseAll
//   .then((res) => console.log("res", res))
//   .catch((err) => console.log("err", err));

// const urls=['https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/todos/2',
//     'https://jsonplaceholder.typicode.com/todos/3'
// ]
// const fetchArray=urls.map(url=>fetch(url)
// .then(res=>res.json()))

// const promiseAll=Promise.all(fetchArray)
// promiseAll.then(res=>console.log(res))
// console.log(promiseAll)

// Promise.allSettled
//  const promiseAll = Promise.allSettled([
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Error is here");
//     }, 2000);
//   }),
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("Something went wrong");
//     }, 3000);
//   }),
// //   "I am non promise",
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       rej(4);
//     }, 1000);
//   }),
// ]);
// promiseAll.then(res=>console.log(res))
//Promise.race
//  const promiseAll = Promise.race([
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Error is here");
//     }, 2000);
//   }),
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("Something went wrong");
//     }, 3000);
//   }),
// //   "I am non promise",
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res(4);
//     }, 1000);
//   }),
// ]);
// promiseAll.then(res=>console.log("res",res))
// .catch(err=>console.log("err",err))
// Promise.any

//  const promiseAll = Promise.any([
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("Error is here");
//     }, 2000);
//   }),
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("Something went wrong");
//     }, 3000);
//   }),
// //   "I am non promise",
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       rej(4);
//     }, 1000);
//   }),
// ]);
// promiseAll.then(res=>console.log("res",res))
// .catch(err=>console.log("err",err))
// Promise.resolve
const promise1=Promise.reject("somethiong went wrong")
promise1.catch(res=>console.log(res))
console.log(promise1)
// Promise.reject
