function myname(){ //BASIC SYNTAX
    console.log("S");
    console.log("W");
    console.log("A");
    console.log("P");
    console.log("Y");
}
// myname()//FOR CALLING FUNCTION

function addition(num1,num2){
 //   console.log(num1+num2);
    return num1+num2
}
const result= addition(3,5) 
//console.log("result:",result);


function LoginUserMessage(user){
    return `${user} just log in `
}

//console.log(LoginUserMessage("swapnil"));


function cart(...num4)//rest operator (...)for adding more than one value in same element
{
    return num4
}
console.log(cart(200,4000,50000));
