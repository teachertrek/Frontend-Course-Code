console.log("Loops")

// Real-Life Example of a Loop.

// What is a Loop?

for (let index = 1; index < 1; index++) {
    console.log("Hello World") // 1 + 1 + 1 + 1 + 1  
}
console.log("Hi")

for(let i=0;i<5;i++){
    for(let j=0; j<3;j++){
        console.log("Inner Loop")
    }
    console.log("Inner Loop Finished")
}

// Types of Loops in JavaScript.
// Looping with `for` and `while`.
// Break and Continue Statements.
// Looping with `do...while`
// Nested Loops.
// Common Mistakes with Loops.

// Using while loop
let num = 0;
while (num < 5) {
    console.log(num); // 1 + 1 + 1 + 1 + 1 
    num++;
}

let num2 = 0;
do {
    console.log("do while loop",num2); // 0
    num2++;
} while (num2 < 0);

