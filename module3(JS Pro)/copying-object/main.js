
// Object references and copying


 /* 
 const user1={
    name:"Prakash"
 }
 const user2=user1
 console.log(user1===user2); */
// const user1={
//     name:"Prakash"
//  }
//  const user2=user1
//  user2.name='Akash'
//  console.log(user1);
 

//  const user={
//     name:"Prakash",
//     age:27,
//     city:"Delhi"
//  }
 // spread operator
//  const copyObj1={
//     ...user
//  }
//  copyObj1.name='Akash'
//  console.log(user);

 // copy key and value in empty obj
 /* const copyObj2={
 }
 for (const key in user) {
    
    copyObj2[key]=user[key]
 }
 copyObj2.name='akash'
 console.log(user); */

 // Object.assign
//  const copyObj3=Object.assign({},user)
//  copyObj3.name='Akash'
// console.log(user);

// const user={
//     name:"Prakash",
//     address:{
//         city:"Delhi"
//     }
// }

// const copyObj1={}
// for (const key in user) {
//     copyObj1[key]=user[key]
// }
// copyObj1.address.city='Gurugram'

// console.log(user);

const user={
    name:"Prakash",
    age:20
}
user.me=user
console.log(structuredClone(user));

console.log(JSON.parse(JSON.stringify(user)));


 
 

 



// Note : TFunctions are bound to
//  execution context (closures, scope, this), 
// which cannot be serialized/cloned safely 
// across memory boundaries.



