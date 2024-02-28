// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// it wont return anything but in develoupment we may need some data to work on them in future
// myNum.forEach( (num) => {
//     console.log(num > 4);
// } )


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const temp = myNum.filter( (num) => (num > 4) )     // no need of explicit return because we have used () insted of {}
const temp = myNum.filter( (num) => {
    return num > 4
} )

// console.log(temp);







// real world example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];



// const myBook = books.filter( (bk) => bk.genre === "History")

const myBook = books.filter( (bk) => {
    return bk.publish > 1990 && bk.genre === "History"
} )

// console.log(myBook);



// map() ->  use to modify the array, we can use chaining also like a.map().map().filter -> maap return value unlike for rach loop
const myNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const ans = myNum1.map( (num) => num*10 )
const ans = myNum1.map( (num) => num*10 ).map( (num) => num+1 ).filter( (num) => num > 50 )

console.log(ans);