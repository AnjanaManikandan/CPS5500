function fetch(){
    myRequest.get('http://www.boredapi.com/api/activity')
        .then(response => console.log(`${response.data.activity}`))
}
/*
const myRequest = require('axios')
//http://www.boredapi.com/api/activity
myRequest.get('https://httpstat.us/404')
    .then(response => console.log(`we got it ${response.data.activity}`))
    .catch(error => console.error(`we failed with ${error}`))
*/
function testFetch(){
    //http://www.boredapi.com/api/activity
    //https://httpstat.us/404
    fetch('http://www.boredapi.com/api/activity')
        .then(response => response.json())
        .then(data => document.body.innerHTML +-data.activity)
        .catch(error => console.error(`we failed with ${error}`))
}
testFetch()