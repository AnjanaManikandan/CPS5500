const readline = require('readline');
const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

line.question('Enter a string: ', (userString) => {
  modifyStringAndCallCallback(userString, displayModifiedString);
  line.close();
});

function modifyStringAndCallCallback(inputString, callback) {
  const modifiedString = inputString.toUpperCase();
  callback(modifiedString);
}

function displayModifiedString(modifiedString) {
  console.log('Modified String:', modifiedString);
}
