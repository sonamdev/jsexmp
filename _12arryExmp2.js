arr=[1,2,3,4,5]
console.log("A   ",arr)
console.log("slice.............")

const arrn1=arr.slice(1,4)
console.log("sliced value- ",arrn1)
console.log("b  ",arr)


console.log("splice............")
//manipulates original values of array- spliced values r removed
//end value is inclusive
const arrn2=arr.splice(1,4)
console.log("spliced value-",arrn2)
console.log("b  ",arr)