const numbers = [1, 2, 3, 4, 5]
for(const num of numbers){
    // console.log(`number is : ${num}`);
}



const greeting = "Krishna Vardhan Singh"
for(const alpha of greeting){
    // console.log(alpha);
}



// map only store unique values
const map = new Map()
map.set("IN", "India")
map.set("SA", "Saouth Afrrica")
map.set("SL", "Shi Lanka")

// console.log(map);
for(const [key , value] of map){
    // console.log(key, value);
} 




// object is not iteratable in the same manner as map
/*
    const obj = {
    lng1 : "Hindi",
    lng2 : "Sanskrit"
    }

    for(const [key, value] of obj){
        console.log(key,value);
    }   
*/




// to access the object we use for-in loop
const pgmLang = {
    js : "Javascript",
    rb : "Ruby",
    cpp : "C++"
}

for(const key in pgmLang){
    // console.log(`${key} is the abrivation for ${pgmLang[key]}`);
}




// for-in loop in array
const newNum = [1, 2, 3, 4, 5, 6]

for(const num in newNum){
    // console.log(num);            // print the key from 0 -> thats why object is introduce coz we can have any type of key starting from anywhere
    console.log(newNum[num]);       // it will give desired output
}



// for-in don't work with maps