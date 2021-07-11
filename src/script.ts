/**Function basics in typescript */

//Declaring a variable and setting it to a function

let greet = () => {
    console.log("Hello")
}

//explicitly defining that a variable should hold a function

let sayName: Function

sayName = ()=>{
    console.log("yemi")
}

//declaring a funtion with parameters and stating the dataTypes they hold
//------------------------------------------------------------------------
//with parameters
let add = (a:number,b:number)=> {
    console.log(a+b)
}

add(5,4)

//with parameters and optional parameters and union types

let minus = (a:number, b:number, c?:number | string) => {
    console.log(a-b)
    console.log(c)
}

minus(10,7)

//with parameters and optional parameters with a default value and union types. you no longer need the question mark
//this function will return void since nothing is returned
let divide = (a:number, b:number, c:number | string = 10) => {
    console.log(a/b)
    console.log(c)
}

divide(10,7,"yemi")

//with parameters and optional parameters with a default value and union types. also declaring what type a function will return,although not necessary
let modulus = (a:number, b:number, c:number | string = 10): number => {
    console.log(c)
    return a%b
}

let result = modulus(10,7) //the type result will have will be number. you cant set "result" to any other type


//in typescript "void" means lack of return value while "undefined" means lack of assignment to a variable