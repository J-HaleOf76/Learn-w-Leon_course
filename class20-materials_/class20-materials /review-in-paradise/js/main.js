// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
// let color = red;
// pizza = color;
// alert(pizza);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let myName;
myName = "John Hale";
// alert(myName[1]);
console.log(myName[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function take3DivideMultiply(num1,num2,num3) {
 let sum = num1 / num2 * num3
  // alert(sum)
  console.log(sum);
}
take3DivideMultiply(112,7,4);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function takes1(oneNum) {
 number = Math.cbrt(oneNum)

  console.log(number);
}
takes1(7);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function whatMonth(month) {
  let month = month.toLowerCase()
  if (month == "April" || month == "May" || month == "June" || month == "July") {
      console.log("YAY Its a summer month ");
    
  } else {
    console.log("BOOOOO");
  }
}
whatMonth("January");
// This could have used a toLowerCase 

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipBy5(aNum) {
  for (let i = 0; i < aNum.length; i++) {
    if(i % 5 !== 0){
       console.log(aNum)
    }
    // console.log(aNum);
  }
}
skipBy5(67);

function skip5s(n ) {
  for (let i = 1; i < n; i++) {
      if (i % 5 !== 0) {
      console.log(i)
        
      } 
  }
}
