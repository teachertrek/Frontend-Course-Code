console.log("Why this");
// Why This

// 1 generic, reusable

const user1 = {
  name: "Prakash",
  print1: function () {
    console.log(user1.name);
  },
  print2: function () {
    console.log(this.name);
  },
};
const user2 = {
  name: "Akash",
};
user2.print1 = user1.print1;
user2.print2 = user1.print2;
user2.print1();
user2.print2();

// 2. Constructor Fun & Constructor / class

// function Car(name, color) {
//   this.name = name;
//   this.color = color;
//   return this
// }
// const car1=new Car('Curvv',"black")
// const car2=new Car('Curvv',"white")

// console.log(car1);
// console.log(car2);
class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  getColor(){
    return this.color
  }
}
const car1=new Car('Curvv',"red")
const car2=new Car('Curvv',"white")
console.log(car1,car2);


// 3. Event Handling

// 4. Writing in Prototype
const arr=[1,2,3]
Array.prototype.myMap=function(cb){
  let res=[]
  for (let index = 0; index < this.length; index++) {
   res.push(cb(this[index]))
  }
  return res
  

}
console.log(arr.myMap(item=>item*2));
