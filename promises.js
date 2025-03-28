const promiseOne = new Promise(function(resolve,reject){
    //do Db call 
    //Do an asuync task      
    setTimeout(function()
    {
         //console.log("async task is complete")
         resolve();
    },1000)
     
})

promiseOne.then(function(){
   //  console.log("promise consumed ")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved ");
    
})
//passing the value 
const promiseThree =new Promise(function(resolve,reject
){
    setTimeout(function(){
            resolve({user:"swapnil",email:"swap@gmail.com"});
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
          if(!error)
            {
                resolve({
                     username:"hitesh",
                     password :122
                });
            } 
            else
            {
                 reject('Error : something went very wrong')
            } 
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
     return user.username
}).then((username)=>{
        console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("promise is either resolve or reject"))  

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
          if(!error)
            {
                resolve({
                     username:"Varun",
                     password :122
                });
            } 
            else
            {
                 reject('Error : Js went very wrong')
            } 
    },1000)
})

async function consumedPromiseFive(){
  try {
    const response = await promiseFive
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

consumedPromiseFive()
//https://jsonplaceholder.typicode.com/users hitesh api
// async function getAllUser(){
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() 
//     console.log(data);
//    } catch (error) {
//     console.log("E:",error);
//    }
   
// }

// getAllUser()

//.then .catch format 


fetch('https://jsonplaceholder.typicode.com/users')
.then( (response)=>{
    return response.json()
}).then( (data)=>{
    console.log(data    )
})
.catch( (error)=> console.log("error"))