// Bring it on
// *Variables*
// Create a variable and console log the value
age = 45
console.log(age)
// Create a variable, add 10 to it, and alert the value
age = age += 10
//alert(age)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
// function sub4Nums(n1,n2,n3,n4) {
//    alert(n1-n2-n3-n4)

// }
// console.log(alert(n1,n2,n3,n4))
// sub4Nums( 123, 33, 2, 4 )
// Create a function that divides one number by another and returns the remainder
function remainder(num1,num2) {
  remainder = num1 % num2
  
}
console.log( remainder(334, 23))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumSum(number1,number2) {
  const sum = number1 + number2
  if (sum > 50) {
    alert("Jumanji")
  }else if (sum < 50) {
    alert("not high enough yet")
  }
}
addTwoNumSum(13,22)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi3By3(number1,number2,number3) {
  multi = number1*number2*number3
  if (multi % 3 === 0) {
    alert(ZEBRA)
  } else {
    
  }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWordX(word,num) {
 for(let i = 1; i <= num; i++){
   console.log(word)
 }
}
logWordX()