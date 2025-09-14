
 function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
const ab=generateSequence()
console.log(ab);
