/*
    --- MATH FUNCTIONS ---
    round() -> round of the value 
    ceil(), floor() -> give the ceil and the floor of the number

*/

// creating randon number using Math.random() -> generate no from 0-1 randomly

console.log(Math.random());

// create a rolling dice generate random output OR LUDO game

let min = 1
let max = 6

// logic to generate random number in certain range
console.log(Math.floor(Math.random() * (max - min + 1) + min));
