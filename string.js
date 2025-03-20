let name = "swapnil"
let repoCount = 50

// console.log(name + repoCount + "value")
console.log(`hello my name is ${name} and mmy repo count is ${repoCount} `)//mordern type of writing 

const gameName = new String('GodFather')//declare string as a object
 //basic function of string 
console.log(typeof  gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a')) 

const newStringgame = gameName.substring(0,4);
console.log(newStringgame);

const strigcut = gameName.slice(-8,4)

console.log(strigcut)


const stingone= "     hello.     "

console.log(stingone)
console.log(stingone.trim())