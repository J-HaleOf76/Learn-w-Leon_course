document.querySelector('#check').addEventListener('click', check)

document.querySelector("#clear").addEventListener('click', clear)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()
  const placeToSee = document.querySelector("#placeToSee")

  //Conditionals go here
  // Is it a class day weekday or boring day
if(day === "thursday" || day === "tuesday" ){
  placeToSee.innerText = "CLASS DAY";
  // alert("Today is a ClassDay");
}else if (day === "sunday") {
  placeToSee.innerText = "Weekend"
} else {
  placeToSee.innerText = "Boring"
  
}

}
function clear() {
  const clear = document.querySelector('placeToSee').innerText = "";

}
// clear();




// Case sensitivity on inputs
// Sunday is Office Hours
// Tuesday & Thursday are class days

// Build the display section of the page