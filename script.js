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
var listOfCourse; //this allows you use mixed dataTypes in an array in typescript
listOfCourse = ["yemi", "omotosho", "Joseph", 9]; //wunt get an error coz i declared that i wanted this variable to hold an array of mixed dataType
