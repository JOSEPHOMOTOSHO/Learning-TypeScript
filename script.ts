/**Explicitly stating the types a variable should hold without assigning it a value */
let age: number
let isTall: boolean
let myName:string

myName = "Joseph" ///it allowed string hence no error

//age = "kkk" //this will give an error coz the type assigned to age ought to be a number


// explicitly defining the data type arrays will hold

let listOfHobbies: (string)[]

listOfHobbies = ["yemi","omotosho","Joseph"] //i wunt get errors since i am assigning strings to the array 

// console.log(listOfHobbies)

// explicitly defining more than one dataType for an array in typescript

let listOfCourse: (string|number)[] //This is called Union Type where you can use either one type or the other.this allows you use mixed dataTypes in an array in typescript

listOfCourse = ["yemi","omotosho","Joseph",9] //wunt get an error coz i declared that i wanted this variable to hold an array of mixed dataType


/**to initialize your declared string array with an empty array */
let listOfSocials: (string)[] = []  //doing this will allow you create empty array you can start using

listOfSocials.push("crowwe") //i can only push data when i have an empty array

// console.log(listOfSocials)


//Union Types on normal variables
let normal: string | number 

normal = 3

normal = "true"

//normal = true //this will give error



//declaring objects

let myData: object// or let myData : {}


myData = {myName:"joe",age:44}

console.log(myData)

//initializing structure an object should take.

let myBag :{
    isBlack : boolean,
    content: number,
    name:string

}

myBag = {
    isBlack:true,
    content: 3,
    name:"ko"
}