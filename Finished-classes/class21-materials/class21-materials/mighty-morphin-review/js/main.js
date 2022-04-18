// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holliday = 'Christmax';
holliday = holliday.toUpperCase()
console.log(holliday);


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let myName = "JohnHale"
myName = myName.toString()
console.log(myName[-1,-2,-3]);

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNumsSub(n1,n2,n3,n4,n5) {
  let sum = (n1+n2+n3+n4+n5 - 100).Math.absolute()
  // alert(sum.Math.absolute())
  console.log(sum.Math.absolute());
}
fiveNumsSub(3,4,5,6,7)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
