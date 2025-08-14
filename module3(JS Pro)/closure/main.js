console.log("closure");

// function outer(){
//     let counter=0;
//     function inner(){
//         return ++counter
//     }
//     return inner
// }

// const increment=outer()
// console.log(increment())
// console.log(increment())

// function outer() {
//   const first = 'A';

//   function middle() {
//     const second = 'B';
//     console.log(first + second ); 

//     function innerMost() {
//       const third = 'C';
//       console.log(first + second + third); 
//     }

//     return innerMost;
//   }

//   return middle;
// }

// const middleFunc = outer();   
// middleFunc()
// middleFunc()
// middleFunc()

// const innerFunc = middleFunc();  
// innerFunc();  
// innerFunc();  
// innerFunc();  


function createCounter() {
    let count = 0; 

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
// console.log(counter)
counter.increment(); 
counter.increment(); 
console.log(counter.getCount()); 
