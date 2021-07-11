/*
let greet: Function 
above we are stating that the greet variable will hold only functions but we can go a bit further and state what
kind of structure the function will have.

e.g () => void
the above is a function signature that states that this fucntion holds no argument and returns void(doesnt return anything)
*/

//example 1 of a function signature

let greet:(a:string,b:string) => void //this is a structure/signature

greet = (name:string, greet:string ) => {//here the function follows the signature
    console.log(`${name} says ${greet}`)
}


greet("yemi","hello")


//example 2 of function signature

let calc: (a:number,b:number,c:string) => number //this is a structure/signature

calc = (numOne:number,nummTwo:number,action:string) => {//here the function follows the signature
 if(action === "add"){
     return numOne + nummTwo
 }else{
     return numOne - nummTwo
 }

}

console.log(calc(1,2,"add"))

//example 3 of function signature
let details: (obj:{name:string, age:number}) => void

type person = {name:string,age:number}

details = (Joseph:person) => {
    console.log(`${Joseph.name} is ${Joseph.age} years old`)
}

details({name:"yemi",age:10})