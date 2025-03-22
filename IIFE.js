
(function dbconnection(){
    //Name IIFE
    console.log(`db connected`)
    
})();//to end the IIFE we have to mention semi-colon on the end 

( (name)=>{
    //no name iife
    console.log(`db connected two${name}`);
})("Swapnil")