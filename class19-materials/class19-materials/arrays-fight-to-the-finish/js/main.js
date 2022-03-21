//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ["His", "Hers", "My Town", "Gremlins", "Great Movie Title Here"]

for(let i = 0; i < movieTitles.length; i++){
  document.querySelector('h2').innerText += movieTitles[i] + ", "; 
}


//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numsArray = [1,3,6,7,12]

//numsArray.forEach((item, i)=> {
  // numsArray[i] = item + 3
  // console.log(i)
 // })

//Find the average of all the numbers from question three
let sum = 0;
// numsArray.forEach((num) => sum += num)

for (let i = 0; i < numsArray.length; i++) {
  sum += numsArray[i];
  
}
  console.log(sum / numsArray.length)
