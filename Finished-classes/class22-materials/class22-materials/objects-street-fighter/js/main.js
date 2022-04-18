//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

// Objects are collections of Variables and functions
// Variables are called Properties
// Functions are called Methods

let drink = {}

drink.brand = "Gatorade"
drink.size = '20 fl oz'
drink.color = 'Red'
drink.pour = function () {
  console.log("Now I dumped it out");
}
// OR //
let drink = {
  brand: "Gatorade",
  size: "20 fl oz",
  color: "Red",
  pour: function () {
    console.log("Now I spilled it")
  }
}
