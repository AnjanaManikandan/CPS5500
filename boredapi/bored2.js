const myRequest = require('axios')
//http://www.boredapi.com/api/activity

async function getActivity(){
    try{
        let response = await myRequest.get('https://httpstat.us/404')
        console.log(`we got it ${response.data.activity}`)
    }
    catch(error){
        console.error(`we failed with ${error}`)
    }
}
getActivity()