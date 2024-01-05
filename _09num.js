const score=400
const sum=new Number(100)
console.log(score)
console.log(sum)
console.log(sum.toString().length)
console.log(sum.toFixed(2))
console.log(typeof sum)
let decimalN=23.896
console.log("precision on 23 ",decimalN.toPrecision(3))
decimalN=123.896
console.log("precision on 123 ",decimalN.toPrecision(3))
decimalN=1123.896
console.log("precision on 1123 ",decimalN.toPrecision(3))
const hundereds=10000000
//console.log(hundereds.toLocaleString())//acc to us standard to convert
console.log(hundereds.toLocaleString('en-IN'))//indian standards
console.log(sum)
console.log(Number.MAX_VALUE)

//***************Maths***********/
console.log("----------Maths----------")
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.max(4,5,7,9))
console.log(Math.round(decimalN))
console.log(Math.random())//between 0-1
console.log((Math.random()*10)+1)//+1 to avaoid 0*10
console.log(Math.floor(Math.random()))
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)) +min)//imp
