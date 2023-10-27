const axios = require('axios');

async function freeActivity() {
  try {
    const response = await axios.get(`http://www.boredapi.com/api/activity?minprice=0&maxprice=0`);
    const activity = response.data;

    console.log("Social Activity that is Free:", activity.activity);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

freeActivity();
/*
const axios = require('axios');

const apiKey = '5881028';

async function findRandom() {
  try {
    const response = await axios.get(`https://www.boredapi.com/api/activity/`);
    const activity = response.data;

    console.log("Random Activity:", activity.activity);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

findRandom();


const axios = require('axios');

const apiKey = '5881028';

async function findActivityByKey(key) {
  try {
    const response = await axios.get(`https://www.boredapi.com/api/activity?key=${key}`);
    const activity = response.data;

    console.log("Activity:", activity.activity);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

findActivityByKey('your-key-here');
*/
