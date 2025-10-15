
//  const user={
//    firstName:"Prakash",
//    lastName:'Kumar',
//    get fullName(){
//       return `${this.firstName} ${this.lastName}`
//    },
//    set fullName(name){
//       let breakName=name.split(' ')
//       this.firstName=breakName[0]
//       this.lastName=breakName[1]
//    }
//  }
//  console.log(user.fullName)
//  user.fullName='Akash Kumar'
//  console.log(user.lastName)

 // validation
//  const user={
//    age:0,
//    get getAge(){
//       return this.age
//    },
//    set getAge(value){
//       if(value<0){
//          console.warn("Age can not be -ve")
//       }else{
//          return this.age=value
//       }
//    }
//  }
//  user.getAge=-5
//  user.getAge=25
//  console.log(user.age)

// Computed Property
// const rectangle={
//    width:10,
//    height:4,
//    get area(){
//       return this.width * this.height
//    }
// }
// console.log(rectangle.area)

// Read only property
const car={
   make:'TATA',
   model:'Harrier',
   get description(){
      return `${this.make} ${this.model}`
   }
}
console.log(car.description)
car.description='Honda City'
console.log(car.description)