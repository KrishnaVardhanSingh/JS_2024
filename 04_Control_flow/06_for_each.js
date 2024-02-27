// call-back function dont have names

const languages = ["CPP", "JAVA", "Javascript", "Swift"]

// languages.forEach( function (item) {
//     console.log(item);
// } )


// languages.forEach( (item) => {
//     console.log(item);
// } )


function printMe (val){
    // console.log(val);
}

languages.forEach(printMe)      // dont write printMe() -> we only give reference to it 



// important and different way
languages.forEach( (key, value, arr) => {
    // console.log(key, value, arr);
} )



// most important because database send data in form of arraty of objects

const myLanguage = [
    {
        name : "Javascript",
        extn : "js"
    },
    {
        name : "Java",
        extn : "java"
    },
    {
        name : "Python",
        extn : "py"
    }
]

myLanguage.forEach( (item) => {
    console.log(item.extn);
} )