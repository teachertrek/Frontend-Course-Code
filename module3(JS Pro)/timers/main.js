
// What is setTimeout


console.log("hi")
// let count=0;
function print(count){
   /*  count++ */
    console.log(count)
}
const id=setTimeout(print,3000)
clearTimeout(id)
console.log(id)

 /* setTimeout(()=>{
    console.log("hello")
 }) */
// What is setInterval

let id2=setInterval(print,1000, "prakash")
setTimeout(()=>{
    clearInterval(id2)
},2000)
console.log("id2",id2)
// `setTimeout` and `setInterval` with 0 and no time
// Key Differences Between `setTimeout` and `setInterval`
// Important Notes
// Key Takeaways

// sync
console.log("1")
console.log("1")
console.log("1")

// async
console.log("1")
setTimeout(()=>{
    console.log("2")
})
console.log('1')