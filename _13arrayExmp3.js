const marvel=["thor","Ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel.push(dc)
//console.log(marvel)
//console.log(marvel.join(dc))
console.log(marvel.concat(dc))
console.log(marvel) 
//instead u can use spread operator
const allheros=[...marvel, ...dc]
console.log(allheros)
//lets make array flat
const arrf=[1,2,3,[4,5,6],7,[8,9,[10,11]]]
console.log(arrf.flat(Infinity))//give depth else infinity
console.log(Array.isArray("sonam"))
console.log(Array.from("sonam"))
console.log(Array.from({name:"sonam"}))





