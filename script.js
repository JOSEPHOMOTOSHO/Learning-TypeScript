/**Explicitly stating the types a variable should hold without assigning it a value */
var age;
var isTall;
var myName;
myName = "Joseph"; ///it allowed string hence no error
//age = "kkk" //this will give an error coz the type assigned to age ought to be a number
// explicitly defining the data type arrays will hold
var listOfHobbies;
listOfHobbies = ["yemi", "omotosho", "Joseph"]; //i wunt get errors since i am assigning strings to the array 
// console.log(listOfHobbies)
// explicitly defining more than one dataType for an array in typescript
var listOfCourse; //This is called Union Type where you can use either one type or the other.this allows you use mixed dataTypes in an array in typescript
listOfCourse = ["yemi", "omotosho", "Joseph", 9]; //wunt get an error coz i declared that i wanted this variable to hold an array of mixed dataType
/**to initialize your declared string array with an empty array */
var listOfSocials = []; //doing this will allow you create empty array you can start using
listOfSocials.push("crowwe"); //i can only push data when i have an empty array
// console.log(listOfSocials)
//Union Types on normal variables
var normal;
normal = 3;
normal = "true";
//normal = true //this will give error
//declaring objects
var myData; // or let myData : {}
myData = { myName: "joe", age: 44 };
console.log(myData);
//initializing structure an object should take.
var myBag;
myBag = {
    isBlack: true,
    content: 3,
    name: "ko"
};



