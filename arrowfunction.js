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
coffie()