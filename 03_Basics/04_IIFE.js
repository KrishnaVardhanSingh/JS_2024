// to remove the pollution of global decleration or varibles into the function is we use IIFE
// IIFE execute imidiatly -> ()()



(function chai(){
    // name IIFE
    console.log(`DB Connected`);
})();      // -> we have to use semicoln here explicitly because it will dont understand where to terminate



( (name) => {
    // unnamed IIFE
    console.log(`DB TWO Connected  ${name}`);
})("Krishna");
