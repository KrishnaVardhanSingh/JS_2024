let userEmail = "Krishna@yahoo.com"

if(userEmail){
    console.log("got user email");
}
else{
    console.log("didn't get user value");
}



// falsy value   --> false, 0, -0, BigInt0n, null, undefined, ""
// trythy values --> "0", 'false', " ", [], {}, function(){}



// const array = []
// if(array.length === 0)
// {
//     console.log("false");
// }



// const obj = {}
// if(Object.keys(obj).length === 0)
// {
//     console.log("false");
// }




// Nulish Coalescing Operator (??) : null and undefined

let val1;
// val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 20

console.log(val1);




// ternary operator -> ' ? '
// condition ? true : false

let paymentStatus = true
paymentStatus ? console.log("Payment is done") : console.log("Payment is not done");