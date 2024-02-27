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




// what if no. of arguments are not predefined e.g. sum of cart items price
// ... -> is a rest as well as spread operator depend on their usecases

function cartItemsPrice(val1, ...num){
    return num
}

console.log(cartItemsPrice(100, 24000, 1256));     //  1st value will be assign to the val1 rest to num




// passing Objects as a parameter
const productInfo = {
    name : "laptop",
    price : 123312
}

function handelObject(anyObject){
    console.log(`The price of this ${anyObject.name} is ${anyObject.price} only`);
}

// handelObject(productInfo)
handelObject({
    name : "watch",
    price : "1299"
})

