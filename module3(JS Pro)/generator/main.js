// Generators function can return (“yield”) multiple
//  values, one after another, on-demand. They 
//  work great with iterables, allowing to create 
//  data streams with ease.

function* numbers(num){
    const addTen=num+10
    yield addTen
    yield 2
    yield 8
    
}

const generatorObj=numbers(5)
console.log(generatorObj);
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next());

// for (const num of generatorObj) {
//     console.log(num);
    
// }

const arr=[...generatorObj]
console.log(arr);





















