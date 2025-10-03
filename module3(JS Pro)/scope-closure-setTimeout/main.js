
 /* let num1=2
 setTimeout(()=>{
    console.log(num1)
 })

    
    for(var i=0;i<3;i++){
        setTimeout(()=>{
            console.log(i);
        })
    } */




    /* for(var i=0;i<3;i++){
        function test(){
            var k=i
            setTimeout(() => {
                console.log(k)
            });
        }
        test()
    } */

    const user={
        name:"Prakash",
        age:20,
        printMyName:function(){
            console.log(this)
            setTimeout(()=>{
                console.log(this)
            })
        }
    }

    user.printMyName()

    
    


