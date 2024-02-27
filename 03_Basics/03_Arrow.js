const user = {
    name : "Krishna",
    age  : 24,

    welcomeMessage : function(){
        console.log(`${this.name}, welcome to my website`);
        // console.log(this);
    }
}

user.welcomeMessage()
user.name = "Vardhan"
user.welcomeMessage()

// console.log(this);

//  this keyword only use with objects not with the functions -> it will show undefined






// **************************************** ARROW FUNCTION  **********************************************
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2, 5));

// implicit function -> no need to use {} and no neet to retuern any thing and vice-verca for explicit

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(2, 5));

// for objects
const forObject = (num1, num2) => ({name : "Krishna"})
console.log(forObject());
