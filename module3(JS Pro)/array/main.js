// const test = function () {
//   for (const element of arguments) {
//     console.log(element);
//   }
//   console.log(arguments.length);
// };
// test(1, 2, 3, 9);

(function () {
  for (const element of arguments) {
    console.log(element);
  }
  console.log(arguments);
})(4, 5, 4, 5);

function test() {
    console.log(arguments);
  const arrow = () => {
    console.log(arguments);
  };
  arrow();
}
test(2,3,2,3,23)
