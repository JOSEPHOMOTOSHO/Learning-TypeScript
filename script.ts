//Arrays: when you initialize an array with a certain data type, you cant assign another type to such an array.
//with what i have seen you could initially assign mixed data types though.

let myNames = ["yemi","Joseph","Oluwabusuyi",3]

myNames.push(3)

// console.log(myNames)



//objects
/**Just like variables if you assign a certain type to an object property you cant change that type..it's been strictly set
 * you cant also reassign an object variable
 * if you will resassign, the value being reassigned to the varaible must also be an object
 * when you reassign, the object structure has to be same with the previously assigned object
 * this means you cant also add in a new property coz you will affect the initial structure you started with
 */

let myProperties = {
    myName:"Omotosho Joseph",
    age:9,
    isTall: false
}

myProperties.myName = "yemi"

console.log(myProperties)