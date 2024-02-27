// singalton
// object.create


// object literals 
    /* key stored in for of strings, value can be of any type
    {} -> object
    we can create key like -> "Name", but this can't be assesed using '.' operator like jsUser."Name"
        we have to use jaUser["Name"]
*/

const newSym = Symbol("temp")

const jsUser = {
    name : "Krishna",
    age  : 21,
    email : "KrishnaVPS@gmail.com",
    location : "Deoria",
    "time" : "bad",
    // using symbol as a key in object, newSym : "tempData" -> in this data type of newSym would become string 
    [newSym] : "tempData"

}

console.log(jsUser.name);
console.log(jsUser["time"]);   //  -> better way to acces the object's key
console.log(jsUser[newSym]);


// Object.freeze(jsUser)    // -> can't do any modificatio in the jsUser object


jsUser.greeting = function(){
    console.log(`Hello Mr ${this.name} i know you are ${this.age} but don't worry age is just a number 😂`)
}

// console.log(jsUser.greeting());     // if write jsUser.greeting -> get the reference of the function only
console.log(jsUser.greeting());   