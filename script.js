/** You can type the same way in typescript file like you do in javascript but you cant run typescript in your browser until you compile typescript to
 * javascript.
 * To compile all you need to do is type in your command "tsc nameOfTypeScriptFile.ts nameOfTypeScriptFile.js"  (no quotes)
 * do this compilation format only when the ts and js files have different names but if they have same name you can just run
 * "tsc nameOfTypeScriptFile.ts" (this command can also be used to create a ts file that doesnt exist)
 * EACH TIME YOU WRITE SOMETHING IN TYPESCRIPT YOU NEED TO COMPILE IT IN JAVASCRIPT ALWAYS
 * a way to get around the above statement is to do e.g "tsc nameOfTypeScriptFile.ts --w"this commands watches and run your code each time you save
 *
 *  */
var age = 23;
var myName = "Omotosho Joseph";
var isTall = false;
//try changing age or any other variable to another type other than what you assigned, e.g a string
// age = "ma"
//myName = "police"
// let circ = (diameter: number) => {//declare parameter type by doing parameter:type 
//     return diameter * Math.PI
// }
// console.log(circ(34))
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(4));
