function name (){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("H");
    console.log("A");
}

// name()



// this will not retuen anything, it will simply print
function addition(number1, number2){
    console.log(number1 + number2); 
}

function addition(number1, number2){
    return (number1 + number2)
}

console.log(addition(2, 5));




function loginMessage(username = "Random"){
    // username = "Random" -> default value if argument is undefined -> no need to use if-else
    if(username === undefined)
    {
        console.log("Please enter the User Name");
        return
    }
    return `${username} just logged in`
}

console.log(loginMessage("Krishna"))

