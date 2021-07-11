"use strict";
/*
let greet: Function
above we are stating that the greet variable will hold only functions but we can go a bit further and state what
kind of structure the function will have.

e.g () => void
the above is a function signature that states that this fucntion holds no argument and returns void(doesnt return anything)
*/
//example 1 of a function signature
let greet; //this is a structure/signature
greet = (name, greet) => {
    console.log(`${name} says ${greet}`);
};
greet("yemi", "hello");
//example 2 of function signature
let calc; //this is a structure/signature
calc = (numOne, nummTwo, action) => {
    if (action === "add") {
        return numOne + nummTwo;
    }
    else {
        return numOne - nummTwo;
    }
};
console.log(calc(1, 2, "add"));
//example 3 of function signature
let details;
details = (Joseph) => {
    console.log(`${Joseph.name} is ${Joseph.age} years old`);
};
details({ name: "yemi", age: 10 });
