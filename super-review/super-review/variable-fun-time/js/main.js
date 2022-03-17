//--- Easy
//create a variable and assign it a number
let age = 46

//minus 10 from that number
age = age - 10
//print that number to the console
console.log(age);


//--- Medium
//create a variable that holds a value from the input
let newValue = Number(document.querySelector("input").value)

//add 25 to that number

newValue += 25
//alert that number
alert(newValue)
console.log(newValue);


//--- Hard
//create a variable that holds the h1
let clickValue = document.querySelector(h1).value


//add an event listener to that element that console logs the sum of the two previous variables
clickValue.addEventListener('click',addTwoNumbers)
function addTwoNumbers() {
  console.log(age + newValue);
}
addTwoNumbers();
console.log(addTwoNumbers);