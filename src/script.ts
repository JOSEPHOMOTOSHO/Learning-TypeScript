/**Type alisases help us reduce the amount of type duplication when trying to declare types */



/*
Examples

const logDetails = (uid:string|number,item:string)=>{
    console.log(`${item} has a userId of ${uid}`)
}

const greet = (user:{name:string,uid:string|number}) => {
console.log(`Hello ${user.name} `)
}
*/

//to fix the commented examples above we can reduce the amount of repeated types by declaring a variable that holds types

// type stringOrNum = string|number

// const logDetails = (uid:stringOrNum,item:string)=>{ // we put our custom type as an argument
//     console.log(`${item} has a userId of ${uid}`)
// }

// type objWithName = {name:string,uid:stringOrNum}

// const greet = (user:objWithName) => {
//     console.log(`Hello ${user.name} `)
//}

/*practice*/
type stringOrNum = string|number
type obj = {name:string,age:number,id:stringOrNum}

const greeting = (user:obj ) => {
     return `hello my name is ${user.name} and my id says ${user.id} and i am ${user.age} `
}
const intro = (user:{name:string,age:number,id:stringOrNum},talks:number) => {
    return `hello my name is ${user.name} and my id says ${user.id} and i am ${user.age} and i talk ${talks} times daily`
}

console.log(greeting({name:"joseph",age:89,id:90}))

