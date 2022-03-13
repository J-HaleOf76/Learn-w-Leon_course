// Bring it on again
// *Variables*
// Declare a variable, assign it a value, and alert the value
// //twoPlusTwoMinus();

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
// function take3Log(n1,n2,n3,100) {
//   const result = (100 + n1 - n2) \ 3
//   if (result > 25) {
//     console.log("WINNER");
//   }
  
// }


// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitalization and if the user does not enter a day of the week alert "Try again!"

// function takeDayAlert(day) {
//   const dayOfWeekLower = day.toLowerCase()
//   if (dayOfWeekLower === "saturday" || "sunday") {
//     alert("It's the weekend")
    
//   } else if (dayOfWeekLower === "monday" ||
//              dayOfWeekLower === "tuesday" ||
//              dayOfWeekLower === "wednesday" ||
//              dayOfWeekLower === "thursday" ||
//              dayOfWeekLower === "friday" ||
//   ) {
//     alert("WeekDay")
//   }else{ alert("Try Again Fool")}
// }
// takeDayAlert("Monday")



//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but count by 3

function logNumBy3(num) {
  for (let i = 1; i <= num; i+=3) {
    console.log(i);
    
  }
  
 }
 logNumBy3(9)




// Functions and Loop Practice
// function countsHigh(num, list) {
//   const list = [1,13,31,32,23,43,4,3,2,1,423,55,66,77,111,342,0,9,8,77,67,88]
//   let numnew = []
//   for (let num = 1; num <= list; num++) {
//     console.log(num);
//     console.log(list);
//   }
  
// }
// countsHigh(1)
