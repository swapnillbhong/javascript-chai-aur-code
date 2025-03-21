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

//const obj3 =Object.assign(obj1,obj2) // we can use the function like this 

const obj3={...obj1,...obj2}//by using split method
//console.log(obj3)

// const user = [
//     {
//         id:1,
//         email:"s@gmail.com"
//     }
//     {
//         id:2,
//         email:"s@gmail.com"
//     }
//     {
//         id:3,
//         email:"s@gmail.com"
//     }
//     {
//         id:4,
//         email:"s@gmail.com"
//     }
//     {
//         id:5,
//         email:"s@gmail.com"
//     }
// ]
//user[1].id // to access the object from array 

console.log(Object.keys(insta));// to access the object element as a array
console.log(Object.values(insta));


