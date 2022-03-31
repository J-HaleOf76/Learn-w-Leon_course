// *Variables*
// Declare a variable, assign it a boolean, and alert the value
// let age = 46
// alert(age)

// Declare a variable, reassign it to your favorite color, and console log the value
// let faveColor = "electricBlue"
// electricBlue += "violet"
// console.log(faveColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
// function fourNumsReturnSum(n1, n2, n3, n4) {
//   let sum = n1 + n2 + n3 / n4
//   return sum
//   console.log(sum)
// }
// fourNumsReturnSum(23, 44, 3, 6)

// This is what Leon had 
function sumThreeAndDivide(n1,n2,n3,n4) {
  return (n1+n2+n3) / n4
}
sumThreeAndDivide(5,10,15,3);
// This disapears after it's called / It runs and then it's done. No alert or log 
console.log(sumThreeAndDivide(5,10,11,3))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
// function twoNumsPower(n1,n2 ) {
//   let total = n1 ** n2
//   console.log(total)
// }
// twoNumsPower(3, 2 )
// THESE ARE BOTH CORRECT
function powerOf(num1,num2) {
  console.log( Math.pow(num1,num2))
}
powerOf(3,2)


//
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
// function boolStr(b, str) {
//  if (b == true) {
//    alert(str)
//  } else if (b == false) {
//    console.log(str)
//  }
//
// }
// boolStr(false, "This string here")
function alertOrLog(b,str) {
  if (b) {
    alert(str)
  }else{
    console.log(str)
  }
// Another way to represent this function statment -- Ternary
  // b ? alert(str) : console.log(str)
}
const alertLog = (b,str) => b ? alert(str) : console.log(str)
console.log(alertLog)
// Same as the above function

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzbuzz(num ) {
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    }else if (i % 5 === 0) {
     console.log('Buzz') 
    }else if (i % 3 === 0) {
      console.log("Fizz")
    }else{
      console.log(i)
    }    
  }
}
fizzbuzz(50)


// function buzzinFizz(number){
//
// let number = '';
// for(let i = 0;i <= 100; i++){
//     number = number + 1;
//   if(1 / 3 === i){
//     console.log("Fizz")
//   }else if(1 / 5 === i){
//     console.log("Buzz")
//   }else if (1 / i === 3 || 1 / 5 === i){
//     console.log("Fizz Buzz")
//   }
// }
// console.log(i)
//
//
// }
// buzzinFizz();



