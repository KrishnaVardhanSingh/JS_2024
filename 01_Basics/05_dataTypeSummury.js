// primitive : Number, String, Boolean, null, undefined, BigInt, symbol


/*
    JS is a Dynamically Typed language in which we dont have to specify 
    the data type, it automatically assigne them the data type at run time 
*/ 

const userID = Symbol('123')
const anotherID = Symbol('123')

console.log(userID == anotherID)    // it will return false 




// Reference : Array, Object, Function

let Vehicals = ["Tata", "Farari", "MGT", 21]

// in object we store the data in key-value pairs
let myObj = {
    name : "krishna",
    age : 21
}

let myFunction = function(){
    console.log("Hellow World!");
}

console.log(myFunction);

/***************************************** HEAP - STACK ********************************************/

// HEAP (non-premivtive, get the reference of the value), STACK (premitive, get the copy of value)

let varOne = "Krishna"
let varTwo = varOne
varTwo = "Vardhan"
console.log(varOne, varTwo);

let userOne = {
    name : "krishna vardhan singh",
    age : 21
}
let userTwo = userOne

// this is a heap allocation and change the name of both the obj variables
userTwo.name = "Kavindra Pratap Singh"
console.log(userOne, userTwo);




