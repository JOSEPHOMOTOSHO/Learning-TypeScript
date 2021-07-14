//Interfaces help us to create a structure for an object that we'll like to use 

/* an interface can be declared like this using type aliases or custom type
type RectangleOptions = {
    height:number,
    width:number
}

let calcRectangle = (options:RectangleOptions) => {
 return (options.height * options.width)
}

console.log(calcRectangle({height:78,width:90}))
*/

/* An interface can also be created using the interface keyword */

interface RectangleOptions{
    height:number,
    width:number
}

let calcRectangle = (options:RectangleOptions) => {
    return (options.height * options.width)
   }
   
 calcRectangle({
     height:78,
     width:980
    })