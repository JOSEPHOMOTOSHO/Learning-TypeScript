"use strict";
//Interfaces help us to create a structure for an object that we'll like to use 
let calcRectangle = (options) => {
    return (options.height * options.width);
};
calcRectangle({
    height: 78,
    width: 980
});
