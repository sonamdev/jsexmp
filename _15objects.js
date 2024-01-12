//when object is created as literal it cant be singleton
const jsuser={
    name:"sonam",
    age:18,
    location:"bhopal",
    email:"vvvgamial.com",
    isloggedin :false,
    logindays:["saturday","sunday"]

    }//object created as literal
//Object.create//creating object using constructor and can create singleton
console.log(jsuser.email)
console.log(jsuser["email"])