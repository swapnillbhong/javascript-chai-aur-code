const marvel_heros=["spiderman","ironman","thor"]
const dc_heros=["powerranger","batman","superman"]

const all_heros=marvel_heros.concat(dc_heros);//to merge two arrays and get a new array
//console.log(all_heros);

const all_new_heros=[...marvel_heros,...dc_heros]//split function in array
console.log(all_new_heros)

console.log(Array.isArray("swapnil"));//to check it is array or not
console.log(Array.from("swapnil")); // to convert into array

let scoore1 =100
let scoore2 =100
let scoore3 =100

console.log(Array.of(scoore1,scoore2,scoore3)) //to convert mutliple values into array