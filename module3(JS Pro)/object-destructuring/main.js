// Object Destructuring

// const user={
//     name:"Prakash",
//     age:20,
//     city:'delhi'
// }
// Default

// const {age, name, city, address='india'}=user
// console.log(name, age, city);
// console.log(address);

// Assign a property to a variable with another name
// const {age:a, name, city,address }=user
// console.log(a);
// console.log(address);

// Combine both the colon and equality
// const user={
//     name:"Prakash",
//     age:20,
//     city:'delhi',
//     address:"india"
// };
// const {age:a=29, name, city,address }=user
// console.log(a);
// console.log(address);

// rest
// ( {name, age, ...rest}=user)
// console.log(name);
// console.log(age);
// console.log(rest);

// what if there’s no let/const and it's sol
// Nested Destructuring
const complexObj = {
  name: "Prakash",
  age:20,
  address: {
    city: "Delhi",
    address2: {
      zipcode: 111111,
    },
  },
  favFruit: ["Apple", "Mango"],
};
const {
  name,
  address:{
    city,
    address2:{
        zipcode
    }
  },
  favFruit:[fruit1, fruit2]
} = complexObj;
// console.log(zipcode);




// Smart function parameters
function test({name, age}){
    console.log(age);
    

}
test(complexObj)
