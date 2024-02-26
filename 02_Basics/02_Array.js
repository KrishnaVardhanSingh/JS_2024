const subjects = ["math", "hindi", "english"]
const teacher = ["ram", "shyam", "mohan"]

// in this cenario 'teacher' array will be added as an elemnt in the 'subject' array
// subjects.push(teacher)
// console.log(subjects);


// it gives the desired oputput but we have to store those data in a new array
// const meargedArray = subjects.concat(teacher)
// console.log(meargedArray);



// SPREAD method
// const allArray = [...subjects, ...teacher]
// console.log(allArray);



// FLAT method
const anotherArray = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]]
const realArray = anotherArray.flat(2)           // -> we can depth infinite but not good practice
console.log(realArray);