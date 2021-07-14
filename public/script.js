"use strict";
/**Type alisases help us reduce the amount of type duplication when trying to declare types */
const greeting = (user) => {
    return `hello my name is ${user.name} and my id says ${user.id} and i am ${user.age} `;
};
const intro = (user, talks) => {
    return `hello my name is ${user.name} and my id says ${user.id} and i am ${user.age} and i talk ${talks} times daily`;
};
console.log(greeting({ name: "joseph", age: 89, id: 90 }));
