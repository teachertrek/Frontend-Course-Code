// Scope Chain
const globalVar = "global";

function outer() {
  const outerVar = "outer";
  console.log(globalVar, outerVar);

  function inner() {
    const innerVar = "inner";
    console.log(globalVar, outerVar, innerVar);
  }

  inner();
}

outer();
// Lexical Enviroment
// Lexical Scope
