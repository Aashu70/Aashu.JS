const accountId = "868882"
let accountEmail = "aashu@gmail.com"
var accountPassword = "12345"
let accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "702086"
accountCity = "Lucknow" 

console.log(accountId);
var prompt = require('prompt');
prompt.start();
let a=prompt('enter a value :');


/*

*/

console.table([accountId, accountEmail, accountPassword, accountCity]);

