// DATE

let myDate = new Date()  // -> we created an object of Date 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());


// we can create our own date variable 
// let myCreatedDate = new Date(2024, 0, 13, 7, 54)   // -> month start from 0 in this type of Date creation


let myCreatedDate = new Date("01-23-2024")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()  // -> give the time in miliseconds from 1979


let newDate = new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());


newDate.toLocaleString('default', {
    hour: "2-digit",
    weekday: "long"
})

