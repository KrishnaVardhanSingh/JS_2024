// var is not in use 
// a normal variable can only be accessed within the scope only

// *******************************  INTRESTING  *********************************

// addOne(5) -> this can be done without any error
function addOne(num){
    return num + 1
}
console.log(addOne(5));


// this is also a function which is holded by a variable, variable can hold anything 
// addTwo(5) -> this will through an error
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));