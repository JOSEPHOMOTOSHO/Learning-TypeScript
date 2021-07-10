//Arrays: when you initialize an array with a certain data type, you cant assign another type to such an array.
//with what i have seen you could initially assign mixed data types though.
var myNames = ["yemi", "Joseph", "Oluwabusuyi", 3];
myNames.push(3);
// console.log(myNames)
//objects
/**Just like variables if you assign a certain type to an object property you cant change that type..it's been strictly set */
var myProperties = {
    myName: "Omotosho Joseph",
    age: 9,
    isTall: false
};
myProperties.myName = "yemi";
console.log(myProperties);
