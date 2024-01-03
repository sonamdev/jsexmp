const account_id=12221  //makes it non changeable
let acc_email="son@d" //can be changed for the variables
var acc_pass="password" // no more used because it does not understand scope
acc_city="jaipur" //also possible
let account_state // gives undefinedif no value is already given
acc_email="dd@gmail.com"
acc_pass="checkout"
acc_city="Indore"
console.log(acc_email)
console.log(acc_pass)
console.log(acc_city)
//account_id=25 // cant assign to constant var
console.log(account_id);
console.log(acc_city)

console.table([account_id,acc_email,acc_pass,acc_city,account_state])
/*
prefer not to user var due to scope resolution issue
*/