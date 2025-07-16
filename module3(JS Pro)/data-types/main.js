console.log('data types')

// primitive

let name='Rahul';
name="Vinay";
console.log(name)
let age=20.799;
let isTrue=true;
let isPresent=null;
let city=undefined;
let uniqueId=Symbol("id")
let largeNum=683268368368263892169219n;

console.log(typeof name)
console.log(typeof age)
console.log(typeof isTrue)
console.log(typeof isPresent)
console.log(typeof city)
console.log(typeof uniqueId)
console.log(typeof largeNum)

let address;
console.log(address)

const user={
    name:"Prakash",
    age:20,
    [uniqueId]:"237878"

}
console.log(user[uniqueId])

// non - primitive

const person={
    name:"Prakash",
    age:20
}

person.age=25
console.log(person)



























