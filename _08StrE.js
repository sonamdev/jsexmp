console.log("hello"+"sonam "+24)
console.log("wecome to newyear ", 2024)
name="sonam"
year=2024
console.log(`Hello ${name},welcome to new year ${year}`)
//string can also be created with constructor
const game=new String("chess")//not character array
console.log(game)
console.log(game[0])
console.log(game.__proto__)//get protype
console.log(game.length)
console.log(game.toUpperCase())
console.log(game)
console.log(game.charAt(3))
console.log(game.indexOf('h'))
let greeting="hello everyone."
const newS=greeting.substring(0,8)
const anotherS=greeting.slice(-10,-2)

console.log(newS)
console.log(anotherS)
const spaceStr="   sonam ."
console.log(spaceStr)
console.log(spaceStr.trim())//work on white spaces and line terminators
const url="http://sonam//223%20S9"
console.log(url.replace('%20','-'))
console.log(url.includes("sss"))
//want to convert string into array
const strarray="lets-learn-js"
console.log(strarray.split('-'))

