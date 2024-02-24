const accountId = 12311;
let accountEmail = "krishna@gmail.com"
var accountPass = "234235235"
accountCity = "Deoria"
let accountState

console.log(accountId);

// do not use var because it have scope issue 
// same variable can be accessed from any scope

console.table([accountId, accountEmail, accountPass,accountCity, accountState])