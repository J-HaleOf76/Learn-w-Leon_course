// server still not working for this . node.js ??

//Arrays
//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [2,6,3,7]

let sum = nums.reduce((acc,c) => acc + c, 0 )
alert(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
// make an array
let numsb = [20,10,5,21,6,46]
// map will make a new array that will be given a new name
// arr.map = num= number * number saved to the new array named numbsSquared
let numsbSquared = numsb.map( n => n * n )
//  Then call the new array
numsbSquared;

// OR Like This
function squareNums() {
  return numsb.map( n => n * n)
}
// Call It
console.log(squareNums())

//Create a function that takes string
//Print the reverse of that string to the console
function printString(str) {
  let revStr = str.split('').reverse().join('');
  console.log(revStr);
}


//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrone(str){
  let reverseStr = str.split('').reverse().join('')
  if(str === reverseStr){
    alert('Yes')
  } else{
    alert('No')
  }
  }
  isPalindrone()