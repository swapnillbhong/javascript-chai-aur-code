const user={
    username:"swapnil",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to company`);
        console.log(this)
    }
}
//console.log(this)
// user.welcomeMessage()
// user.username="sakhi"
// user.welcomeMessage()

//***************************Arrow function********************************************

function coffie(){
    let username =" swappy "
    console.log(this.username)
}
// coffie()

const office = () =>{
    let usernam =" swapnil"
    console.log(this)
}
//office()
//arrow function
const addtwo= (num1,num2) =>{
    return num1+num2
}
//console.log(addtwo(5,4))
//implicit return 
const subtwo = (num1,num2) => num1-num2
console.log(subtwo(5,2))