// reduce() is used in carts
const nums = [1, 2, 3, 4]


// using normal functoin 
// const varl = nums.reduce( function(acc, currVal) {
//     console.log(`acc is : ${acc} and currVal : ${currVal}`);
//     return acc + currVal
// }, 0)


// using call back function
// const varl = nums.reduce( (acc, currVal) => acc + currVal, 0 )
// const varl = nums.reduce( (acc, currVal) => {
//     console.log(`acc is : ${acc} and currVal : ${currVal}`);
//     return acc + currVal
// }, 0 )

// console.log(varl);






// REAL example
const shopingCart = [
    {
        item : "Phone",
        price : 12780
    },
    {
        item : "Fan",
        price : 2343
    },
    {
        item : "Earbuds",
        price : 2789
    },
    {
        item : "Charget",
        price : 999
    }
]

// currVal decone the current object not the accumalator

const totalPriceToPay = shopingCart.reduce( (acc, currVal) => acc + currVal.price , 0 )

console.log(totalPriceToPay);