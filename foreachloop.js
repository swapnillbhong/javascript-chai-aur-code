const coding=["js","py","cpp","java"]

coding.forEach(function (items){
    //console.log(items);
    
})
//using arrow function 
coding.forEach( (items)=>{
   // console.log(items)
} )

function printme(items){
    console.log(items)
}
// using function reference
coding.forEach(printme)