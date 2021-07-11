/*
Dyanamic(Any) Types basically tells typeScript that a data type declared to a variable can be changed anytime in the future of the code
and if the variable has a particular data type declared, we can change it, without getting error


*/


//using "any" keyword with primitives

let myName:any

myName = "jOSEPH"

console.log(myName)

myName = 93

console.log(myName)

myName = true

console.log(myName)

//using "any" keyword with arrays

let listMyNames: any[] = []

listMyNames.push("Joseph")

console.log(listMyNames)

listMyNames.push(89)

console.log(listMyNames)

listMyNames.push(true)

console.log(listMyNames)

//using "any" keyword with objects

let myData: {name:any,age:any,height:any} 

myData = {name:"joseph",age:98,height:true}
console.log(myData)

