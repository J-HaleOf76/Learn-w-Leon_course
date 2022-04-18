//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function newArr(nums) {
 
  let evens = []
  nums.forEach( e => {
    if (e % 2 === 0) {
      evens.push(e)
    }
  })
  return evens;
}
// newArr([1,2,3,4,7]);

console.log(newArr([1,2,,4,3,6]));