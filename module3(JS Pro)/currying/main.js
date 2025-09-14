
// What is Currying?
// Chaining Multiple Functions
// How Does Currying Work?

// function sum(num1){
//     return function(num2){
//         return function(num3){
//             return num1+num2+num3
//         }
//     }
// }

// const res=sum(5)(7)(8)
// // const f2=f1(7)
// // const res=f2(8)
// console.log(res);



// const sumByTwo=sum(2)
// console.log(sum(8)(3)(8))


// function sum1(num1, num2){
//     return num1 + num2
// }
// console.log(sum1(1,2))
// const res=sumByTwo(3)
// console.log(res);



function sum(num1){
    return function(num2){
        return num1 * num2
    }
}
const multiplybytwo=sum(2)
const res=multiplybytwo(4)
const res1=multiplybytwo(8)

console.log(res1);




// Infinite Currying
function sum2(firstNum){
    return function(nextNum){
        if(!nextNum){
            return firstNum
        }
        return sum2(firstNum+nextNum)
    }
}

console.log(sum2(1)(2)(3)(4)(9)())

// Real Life Example of Currying

function applyDiscount(price) {
    return function (discount) {
        price -= price * (discount / 100); // Apply the discount to the price
        return function (extraDiscount) {
            if (extraDiscount) {
                price -= price * (extraDiscount / 100); // Apply another discount if provided
            }
            return price; // Return the final price
        }
    }
}

console.log(applyDiscount(100)(10)(5)); // Output: 85 (Apply 10% and 5% discounts)

// Benefits of Currying
 

