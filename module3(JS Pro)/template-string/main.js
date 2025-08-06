console.log("Template String")
// What are Template Literals?

// Basic Syntax and Usage.
let str=`Hello`;
let num1=80;
let str1=`I got ${num1} rupees`
console.log(str1)

function num(){
    return 12
}
const str2=`I got ${num()} rupees` ;
console.log(str2)

const str3="Hi\nI hope everything is fine";
console.log(str3)
const str4=`Hi
PLease like share & subscribe
`
console.log(str4)
// Nested Template Literals
const color="Red";
const count=5;
let str5 = `I have ${color ? `${count} ${color}` : count} apples`; 

let num2=5;
let num3=7;
const str6=`Sum of two no will be ${num2 + num3}`
console.log(str6)
// Embedding Expressions.
// Multiline Strings.
// Tagged Template Literals.

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    // Append each string part and wrap expressions in <strong> tags
    return result + str + (values[i] ? `<strong>${values[i]}</strong>` : "");
  }, "");
}

// Sample values
const name = "Prakash";
const age = 25;

// Use the tag function with a template literal
const result = highlight`My name is ${2} and I am ${5} years old.`;

console.log(result); 


// Using Template Literals with Functions.