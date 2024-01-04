//Js is dynamically  typed
  
//kis tarah se data ko memory me rakha and access kia jata hai
//based on that 2 types- primitive ND non primitive/
//primitive- call by value -> 7 category
// string,Number,Boolean,null,undefined,symbol,BigInt

//2Reference type-nonprimitive
//Array,objects,Functions
const score= 100
const scorevalue=10.5
const islogedin=false
const outsidetemp=null
let userEmail=undefined//if u dont write undefined it is also undefined

const id=Symbol('123')
const anId=Symbol('123')
//const k;-> const must be intialized
console.log(id=== anId)
console.log(id)
console.log(anId)

const bgNumber=258652865n
//Arrays
const friends=['joe','monica','rachel','ross']
//objects in key value pair
let mydata={
name:"sonam",
age:18,

}

//functions- can be store as variable also
const myfun=function() 
{
    console.log("hello world")

}
  
