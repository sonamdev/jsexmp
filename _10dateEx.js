let myDate=new Date()
console.log(myDate)
console.log("Todatestring",myDate.toDateString())
console.log("To string -",myDate.toString())
console.log("toLocalString- ",myDate.toLocaleString())
let dateEx=new Date()
console.log(dateEx.toString())
console.log(dateEx.getDay())
console.log(Date.now("en-IN"))
console.log(dateEx.toTimeString())
//console.log(dateEx.getTime().toDateString())
let dayList= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
console.log(dayList[dateEx.getDay()])//
