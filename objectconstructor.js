//const insta = new Object()// object as a constructor 

const insta={}

insta.id="123abc"
insta.name="swappy"
insta.IsloggedIn= false

//console.log(insta);

const userInsta={
    email :"swapnil@gmail.com",
    fullname : {
        username:{
            firstname:"swappy",
            lastname:"pawar"
        }
    }
}
//nasted object can be accessable in javascript
console.log(userInsta.fullname.username.firstname)
