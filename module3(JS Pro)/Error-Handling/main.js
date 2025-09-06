// Try – Catch
// console.log("before try");
// try {
//   console.log("hi");
//   setTimeout(() => {
//     try {
//         console.log(age);
//     } catch (error) {
//         console.log("inside settimeout", error)
//     }

//   }, 1000);
//   console.log("hello");
// } catch (error) {
//   console.log("error is here", error);
//   console.log(error.message);
// }
// console.log("after try");

// Error Object in Catch

// Optional Catch Binding\
// console.log("upper")
//  try {
//     console.log("hi")
//     console.log(age)
//     console.log("hello")
//  } catch  {
//     try {
//         console.log(error)
//     } catch (error) {
//         console.log(error)
//     }

//  }
// console.log("lower")
// Real Life Example
// let a='"age":37';
// console.log("upper")
// try {
//     JSON.parse(a)
// } catch (error) {
//     console.log("Error is here",error)
// }
// console.log("lower")
// Throw Operator

//  const newError=new Error("Something  wrong")
//  console.log(newError.message)
//  const error2=new SyntaxError("{ this is missing ")
//  console.log(error2.name)
// console.log("upper")
// try {
//     let a=-21
//     throw new Error("Number is not +ve")
// } catch (error) {
//     console.log(error.name)
// }
// console.log("lower")

// Try – Catch – Finally
// try {
//   let a = -21;
//   // throw new Error("Number is not +ve")
// } catch (error) {
//   console.log(error.name);
// } finally {
//   console.log("I am finally");
// }
// console.log("lower");

// finally and return

function test() {
  try {
    let num2 = 2;
    return num2;
  } catch (error) {
  } finally {
    console.log("I am finally");
  }
}
test();
console.log("pppp");

// try...finally
// console.log("upper")
// try {
//     let num2=2
// } finally  {
//     console.log("i am finally")
// }
// console.log(num2)
// console.log("lower")

// Variables are local inside try...catch...finally

// Global catch

// window.onerror = function(message, url, line, col, error) {
//  console.log("message",message)
//   console.log("message",url)
//  console.log("message",line)
//  console.log("message",col)
//  console.log("message",error)

// };
// console.log("upper")
// try {
//   let a = -21;
//   console.log(age)
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("I am finally");
// }
// console.log(city)
// console.log("lower");


        try {
        setTimeout(() => {
            try {
            console.log(age);
            } catch (error) {
            console.log(error);
            }
        });
        } catch (error) {
          console.log(error);
        }
        
        
        
        
        