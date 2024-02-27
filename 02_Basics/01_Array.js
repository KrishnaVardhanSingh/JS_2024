let myArray = [1, 3, 4, "Krishna", 98]

const myArray2 = new Array(1, 4, 5, "Krishna")
console.log(myArray2);

/*
    array.push(5) -> add 5 in the end
    array.pop()   -> remove last element of the array
    array.unshift(5) -> add 5 in the starting of the array
    array.shift()    -> remove the 1st elemnt of the array
*/


// copy the data of myArray and convert newArray to a string
const newArray = myArray.join()
console.log(newArray);

// slice exlude last element and no modification in origional array
const sliceArray = myArray.slice(1, 3)
console.log(myArray);
console.log(sliceArray);


// solice include last element as well as remove those elements from the origional array 
const spliceArray = myArray.splice(1, 3)
console.log(myArray);
console.log(spliceArray);