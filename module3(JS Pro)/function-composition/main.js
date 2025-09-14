

 function addOne(num){
    return num+1
 }

 function multiplyByTwo(num){
    return num*2
 }

 function square(num){
    return num * num
 }
//  const res=    square(multiplyByTwo(addOne(3)))
function compose(...fns){
    
    

    return function(value){
        return fns.reduceRight((acc,fn)=>{
            return fn(acc)
        },value)
        
    }
}
 const composeFun=compose( square, multiplyByTwo, addOne)
 const res= composeFun(3)
 console.log(res);
 



 // square(multiplyByTwo(4))
  // square(8)

//  console.log(res);


 


