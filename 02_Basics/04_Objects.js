const tempObj = {
    batch : 2024,
    fullName : {
        firstName : "Krishna",
        lastName  : "Vardhan" 
    }
}

// console.log(tempObj.fullName.firstName);

const one = { id : 1, idq : 2}
const two = { idw : 3, ide : 4}

// const merged = { one, two }

const mergertwo = Object.assign({}, one, two)
// console.log(mergertwo);

const merged = {...one, ...two}             // most usable
// console.log(merged);



const tinder = {
    id : 1,
    name : "random",
    age : 21
}

// console.log(tinder);
// console.log(Object.keys(tinder));           // most useable
// console.log(Object.values(tinder));         // most usable



// get oputput from the databases

const user = [
    {
        name : "ramesh",
        age : 21
    },
    {
        name : "kamlesh",
        age : 43
    }
]
// console.log(user[0].name)



// Object De-Structuring

const course = {
    name : "Javascript",
    duration : "20-hr",
    courseInstructor : "hitesh"
}

console.log(course.name);


// destructuring the obj to access it easily
const{name : nm, duration : dur, courseInstructor : ci} = course
console.log(nm, ci);




/*
    ****************************** JSON - javascript object notation, api call *************************************
        in object form
        {
            "name" : "krishna",
            "age" : 21
        }

        in array form 
        [
            {},
            {},
            {}
        ]
*/