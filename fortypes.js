//for off

const arr =[1,2,3,4,5]

for (const num of arr ) {
   // console.log(num);
      
}
//maps
const map = new Map()
map.set('IN','india')
map.set('Us','unitedstate')
map.set('fr','france')

//console.log(map)
//to print key as a array
for (const key of map) {
   // console.log(key)
}
//to print key and value 
for (const [key, value] of map) {
  //  console.log(key ,":-",value)
}
//object is not iterate in for of loop
const myObj= {
    'game1':'NFS',
    'game2':'GTA',
    'game3':'mario'
}
// for (const [key, value] of myObj) {
//   console.log(key,":-",value);
    
// }