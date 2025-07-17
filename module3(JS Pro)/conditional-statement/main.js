console.log("Conditional Statement")



// If Statement
// let temperature = 30;
// if (temperature > 35) {
//   console.log("It's hot outside.");
// }
// Else Statement
// let temperature = 15;
// if (temperature > 25) {
//   console.log("It's hot outside.");
// } else {
//   console.log("It's cool outside.");
// }
// Else-If Statement

// let temperature = 20;
// if (temperature > 25) {
//   console.log("It's hot outside.");
// } else if (temperature > 15) {
//   console.log("It's warm first outside.");
// }
// else if (temperature > 17) {
//   console.log("It's warm outside.");
// }
//  else {
//   console.log("It's cold outside.");
// }
// Nested Else-If Statement
let weather = "rainy";
let temperature = 20;

if (temperature > 25) {
  if (weather === "sunny") {
   
    console.log("Wear light clothes.");
  } else {
    console.log("Carry an umbrella.");
  }
} else {
  if (weather === "snowy") {
    console.log("Wear a heavy coat.");
  } else {
    console.log("Wear a jacket.");
  }
}

// Switch Statement

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the workweek.");
    // break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("It's a relaxing day.");
    // break;
  default:
    console.log("It's a regular day.");
}
// Difference Between If-Else and Switch (Comparison Table)
// Best Practices
// Pros & Cons
// Final Thought