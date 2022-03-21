//Create an array of movies with at least three movies.
let movies = ["ShowNuff", "Breaking Bad", "House", "Cribs" ]
//Using the array from above, store the first movie in a variable
let firstMovie = movies[0]
console.log(firstMovie)
//Get the length of the original array and store it in a new variable
let OGlength = movies.length;
console.log(OGlength)
console.log(movies)
movies.push("another movie")
//Get the last element in that array and store it in a new variable. 
// What if your array was really large and you didn't know the last index? 
// Would your solution still work?

let lastElement = movies.length -1
console.log(lastElement)
console.log(movies)
let lastPlace = movies.pop()
console.log(lastPlace)
