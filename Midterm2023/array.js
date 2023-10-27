const numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (const number of numbers) {
    sum = number+sum;
  }
  
console.log("Array:", numbers);
console.log("Sum of Numbers:", sum);

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Original Array:", numbers);
console.log("Even Numbers:", evenNumbers);


const nums = [1, 2, 3, 4, 5];
squaredNumbers = [];


for(var i = 0 ; i <nums.length; i++){
    squaredNumbers[i] = (nums[i])**2;
}

console.log("Original Array:", nums);
console.log("Squared Array:", squaredNumbers);
*/