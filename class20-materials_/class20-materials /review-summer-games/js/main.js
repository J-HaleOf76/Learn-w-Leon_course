//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
// let array = [3,5,2,8,11,89,9,21,33]
function arrNumbers(num) {
  let product = 1;
  arrNumbers.forEach( num => product *= num)
  alert(product)
}
arrNumbers([3,5,1,11,7,61,9]);