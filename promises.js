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

const promiseThree =new Promise(function(){

})