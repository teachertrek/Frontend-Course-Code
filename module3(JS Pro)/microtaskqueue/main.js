// // Unhandled Rejection

const promise = Promise.resolve(new Error("something wrong"));

// // promise.catch(err=>console.log(err))
// // console.log("Hi")
// // setTimeout(()=>{
// // console.log("hello")
// // })


// window.addEventListener('unhandledrejection',
//  event => console.log(" i am unhandledrejection",
//     event.reason));


    console.log("hi")
    setTimeout(()=>{
        console.log("i am setTimeout")
    })
    const promsie=new Promise((res,rej)=>{
        res(2)
    })
    promsie.then(res=>console.log(res))
    .catch(err=>console.log(err))
    console.log("hello")