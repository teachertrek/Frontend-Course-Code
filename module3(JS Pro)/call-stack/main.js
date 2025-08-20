// function level1() {
//   console.log("Level 1");
//   level2();
  
// }

// function level2() {
//   console.log("Level 2");
//   level3();
  
// }

// function level3() {
//   console.log("Level 3");
// }

// level1();

// // call stack []
function processData() {
  console.log("Starting data processing");
  
  validateData();
  transformData();
  saveData();
  
  console.log("Data processing complete");
}

function validateData() {
  console.log("Validating data");
}

function transformData() {
  console.log("Transforming data");
}

function saveData() {
  console.log("Saving data");
}

processData();

// call stack = []
