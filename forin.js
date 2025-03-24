// for in loop 
const myobj ={
    js:'javascipt',
    java:'java',
    cpp:'c++',
}
//for getting key and value
for (const key in myobj) {
   // console.log(`${key}is for ${myobj[key]}`);
    
    }
//to print the values of an object
    const myarrm=["js","java","cpp","py"]

    for (const key in myarrm) {
      // console.log(myarrm[key]);
    }

//maps
const map = new Map()
map.set('IN','india')
map.set('Us','unitedstate')
map.set('fr','france')
//map is not iterable in for in loop
for (const key in map) {
    
       // console.log(key);
        
    }