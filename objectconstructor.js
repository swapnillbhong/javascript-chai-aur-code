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
//console.log(userInsta.fullname.username.firstname)

const obj1= { 1 :"a" ,2: "b"}
const obj2= { 3 :"c" ,4: "d"}

const obj3 =Object.assign(obj1,obj2)
console.log(obj3)

