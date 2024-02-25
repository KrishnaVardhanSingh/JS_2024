let name = "Krishna"
let age = 21

// mordern way to concaticate string in console log using ``
// console.log(`hellow people my name is ${name} and my age is ${age}`);


// another way to initialize string
const gameName = new String("BGMI")

/* 
    in the above cenario each char is store in form of key value pair
    0 : B
    1 : G
    2 : M
    3 : I
*/

// console.log(name.length)
// console.log(name.toUpperCase())

/* 
    substring() -> start from 0 only -> name.subSubring(0, 4)
    slice()     -> same as substring, extra is it will start from end if start < 0
                   name.slice(-2, 4)
    trim()      -> it will remove all extra space from start and end
*/

// replace all the given string to desired one
let emailId = "KrishnaVPS%23@gmail.com"
console.log(emailId.replace('%23', '-'))


// split the whole string based on given seperator 
let url = "www.myPortfolio.com.profile.projects"
console.log(url.split('.'))
