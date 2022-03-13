//--- Easy
//create a variable and assign it a number
let num = 7

//minus 10 from that number
total = num - 1
//print that number to the console
console.log("First Number:" + " " + total);

//--- Medium
//create a variable that holds a value from the input
// let inputVal = document.querySelector("#danceDanceRevolution").value

//add 25 to that number
// inputVal = inputVal + 4 
//alert that number

// alert(inputVal)

//--- Hard
 // This was tricky because 1 of the values was a STRING and I tried to add it to a NUMBER

//create a variable that holds the h1

const h1Holder = document.querySelector('h1')
// The <h1> is an empty string / I added Number() to the log So that it displayed correctly

//add an event listener to that element that console logs the sum of the two previous variables
// This says to console out the 2 variables and then put that into an eventListener / REWORDED /

h1Holder.addEventListener('click', sum)
// let inputVal = document.querySelector("#danceDanceRevolution").value
function sum() {

let inputVal = document.querySelector("#danceDanceRevolution").value
  console.log(num + Number(inputVal))
  
}
