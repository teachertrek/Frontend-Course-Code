console.log("genefratyr");
console.log("hi");

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

console.log("hello");

let res=generateSequence()
console.log(res);

console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log("bye");




