//when object is created as literal it cant be singleton
const mysym=Symbol("key1")
const jsuser={
    name:"sonam",
    age:18,
    //mysym:"newkey1",
    [mysym] :"newkey",
    location:"bhopal",
    email:"vvvgamial.com",
    isloggedin :false,
    logindays:["saturday","sunday"]

    }//object created as literal
//Object.create//creating object using constructor and can create singleton
console.log(jsuser.email)
console.log(jsuser["email"])
//console.log(jsuser.mysym)//check the type
//console.log(typeof jsuser.mysym)//not symbol line6
console.log(jsuser[mysym])
console.log(typeof jsuser[mysym])

// if we want to freeze a value i.e it cant be changed-
// Object.freeze(jsuser)
// jsuser.email="newemail.try@gmail.com"
// console.log(jsuser)

// Object.freeze(jsuser.name)
// jsuser.name="Ritesh"
// console.log(jsuser.name)


jsuser.greeting= function()
{
    console.log("hello Ritesh......")

}
//unfreeze object else error
console.log(jsuser.greeting())

jsuser.greeting2= function()
{
    console.log(`Hello ${this.name}`)//same object

}
console.log(jsuser.greeting2())
