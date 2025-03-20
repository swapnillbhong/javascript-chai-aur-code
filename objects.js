const myObj={
    "name":"swapnil",
    "fullname":"swapnilbhong",
    Age:23,
    email:"swapnil@google.com",
    isLoggIn:false,
    lostWorkingdays:["satruday","Sunday"]
}

//console.log(myObj.fullname);

myObj.Age=25
//console.log(myObj)
Object.freeze(myObj);
myObj.Age=26
//console.log(myObj)

myObj.greeting = function(){
    console.log("hello dear");
}

console.log(myObj.greeting())