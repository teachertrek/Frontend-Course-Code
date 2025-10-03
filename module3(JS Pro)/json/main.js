
   
    const user={
    name:"prakash",
    age:28,
    
    
   }

   
   localStorage.setItem('users',JSON.stringify(user))

   console.log(JSON.parse(localStorage.getItem('users')));
   
  /*  console.log(JSON.stringify(user)) */

   /* let getDataFromServer=JSON.stringify(user)
   console.log(JSON.parse(getDataFromServer).name); */

   
   
 


