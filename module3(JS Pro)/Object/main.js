console.log("Objects")


// Real-life example of object
// What is Object?
// Creating an Object
const student={
    "first name":"Prakash",
    age:28,
    city:"Delhi"
}
// console.log(student)
// Accessing Object Properties

// console.log(student["first name"])
// Adding and Modifying Properties
student["adress"]="India"
// console.log(student)
student["age"]=30
// console.log(student)
// Deleting a Property
delete student.age
console.log(student)


// let obj2=obj1;
// obj2.age=20
// console.log(obj1)


// Computed Properties
let key="Age";
let obj1={
    name:"Rahul",
    printMyName:function(){
        console.log("I am prakash")
    }
    
};
obj1.printMyName()
console.log(obj1)

// Property Shorthand

let name="Akash";
let age=20;
const user={
    name,
    age,
    printName(){
        console.log("This is prakash")
    }
}
user.printName()
// Nested Objects

const teacher={
    name:"Prakash",
    city:"Delhi",
    student:{
        name:"Rahul",
        age:23
    }
}
console.log(teacher["student"]["name"])
const teacher2={
    name:"Prakash",
    city:"Delhi",
   
}
// Object Methods
// Object.keys() and Object.values()

let user4;
console.log(Object.keys(user4))



