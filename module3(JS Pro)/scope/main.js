// What is scope?
// Global Scope
// var num1 = 2;
// let num2 = 3;
// const num3 = 4;
// console.log(num1, num2, num3);
// function test() {
//   console.log(num1, num2, num3);
// }
// test();

// Block Scope

// {
//     let city="Delhi";
//     const age=20;
//     var address="India"
//     console.log(city, age)
// }
//  console.log( address)

//  for(let i=0;i<3;i++){
//     console.log(i)
//  }
//  console.log(i)

// function test(x) {
//   switch (x) {
//     case 0:
//       let z = 0;
//       break;
//     case 1:

//       break;
//   }
// }
// test(0)
// if (true) {
//   let num1 = 3;
//   const num2 = 4;
//   console.log(num1, num2);
// }
// console.log(num1, num2);

// Function Scope
function test(){
    /* let num1=12;
    const num2=10;
    var num3=14;
    console.log(num1, num2,num3) */
    if(true){
        let num1=2;
        const num2=3
        var num3=10
    }
    console.log(num3)

}
// console.log(num3)
test()
// Local Scope
// Why Learn JavaScript Scope? Key Benefits for You

// {
//     var num5=10
// }
// console.log(num5)
