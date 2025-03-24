const coding=["js","py","cpp","java"]

coding.forEach(function (items){
    //console.log(items);
    
})
//using arrow function 
coding.forEach( (items)=>{
   // console.log(items)
} )

function printme(items){
    console.log(items)
}
// using function reference
//coding.forEach(printme)


const mycoding=[
    {
        languageName:"javascript",  
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
mycoding.forEach( (items) =>{
     //   console.log(items.languageFileName);
        
} )


//filters 

const myNum =[1,2,3,4,5,6,7,8,9,10]

const newNum = myNum.filter( num=> {
    return num > 4
} )
//console.log(newNum);


//map property
const myNumber =[1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumber.map( (num)=> { return num+10}  )

// chaining example'
const newNums = myNumber
.map( (num)=> num*10 )
.map( (num)=> num +1)
console.log(newNums);
