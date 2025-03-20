const marvel_heros=["spiderman","ironman","thor"]
const dc_heros=["powerranger","batman","superman"]

const all_heros=marvel_heros.concat(dc_heros);//to merge two arrays and get a new array
//console.log(all_heros);

const all_new_heros=[...marvel_heros,...dc_heros]//split function in array
console.log(all_new_heros)