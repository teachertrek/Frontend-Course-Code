// synchronous

// console.log("first")
// console.log("second")
// console.log("you")

// asynchronous
// console.log("ordered pizza")
// setTimeout(() => {
//    console.log("pizza is ready")
// }, 3000);
// console.log("you can use your phone")

// callback

// console.log("hello")

// function readyMyPizza(callback){
//    console.log("pizza is ready")

//    callback()
// }

// function person(){
//    console.log("call me when it's ready")
// }
// readyMyPizza(person)
// console.log("hi")

// synchronous callback
// console.log("hello")
// let arr=[1,2,3]
// const res=arr.map(item=>item*2)
// console.log(res)
// console.log("hi")

// asynchronous callback

// console.log("hi");
// setTimeout(function () {
//   console.log("Hello");
// });
// console.log("by");

// callback hell

// setTimeout(() => {
//   console.log("first");
//   setTimeout(() => {
//     console.log("second");
//     setTimeout(() => {
//       console.log("third");
//     });
//   }, 1000);
// }, 1000);

// function fetchUserData(userId, callback) {
//   setTimeout(() => {
//     if (userId !== 123) {
//       callback("User not found", null);
//     } else {
//       callback(null, { id: 123, name: "Alice" });
//     }
//   }, 1000);
// }

// function fetchUserPosts(userId, callback) {
//   setTimeout(() => {
//     if (!userId) {
//       callback("Invalid user ID for fetching posts", null);
//     } else {
//       callback(null, [{ id: 101, title: "Hello World" }]);
//     }
//   }, 1000);
// }

// function fetchUserComments(postId, callback) {
//   setTimeout(() => {
//     if (!postId) {
//       callback("Invalid post ID for fetching comments", null);
//     } else {
//       callback(null, ["Nice post!", "I agree!"]);
//     }
//   }, 1000);
// }

// function fetchCommentReactions(commentId, callback) {
//   setTimeout(() => {
//     if (!commentId) {
//       callback("Invalid comment ID", null);
//     } else {
//       callback(null, { likes: 10, shares: 2 });
//     }
//   }, 1000);
// }

// fetchUserData(123, function (error, user) {
//   console.log("1");
//   if (error) {
//     console.error("Error fetching user:", error);
//   } else {
//     fetchUserPosts(user.id, function (error, posts) {
//       console.log("2");
//       if (error) {
//         console.error("Error fetching posts:", error);
//       } else {
//         fetchUserComments(posts[0].id, function (error, comments) {
//           console.log("3");
//           if (error) {
//             console.error("Error fetching comments:", error);
//           } else {
//             fetchCommentReactions(comments[0], function (error, reactions) {
//               console.log("4");
//               if (error) {
//                 console.error("Error fetching reactions:", error);
//               } else {
//                 console.log("Final reactions:", reactions);
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

//

// how api was calling before promise ans async-await

function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status === 200 ) {
      console.log(xhr)
      successCallback(JSON.parse(xhr.responseText));
    } else {
      errorCallback(new Error(`HTTP Error: ${xhr.status}`));
    }
  };
  xhr.onerror = function() {
    errorCallback(new Error('Network error'));
  };
  xhr.send();
}

fetchData('https://jsonplaceholder.typicode.com/posts/1  ',
  function(data) {
    console.log('Successsss:', data);
  },
  function(error) {
    console.error('Error:', error);
  }
);

// Array.prototype.myMap=function(cb){
//   let res=[]
//   for (let index = 0; index < this.length; index++) {
//     res.push(cb(this[index], index, this))
    
//   }
//   return res
// }
