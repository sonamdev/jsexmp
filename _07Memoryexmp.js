//memory- stack-> for primitive, Heap memory-> non-primitive-> u get reference here
//so changes are made  
//in stack u get copy in heap u get memory reference so chnages are made at original place
let channel="byttesdotcom"
let anotherchannel="newbytes"
anotherchannel="checkpoint"
console.log(anotherchannel)
let user={
email:"dd@gmail.com"

}
let usern=user
usern.email="changed@gmail.com"
console.log(user)
console.log(usern)//change at original place
