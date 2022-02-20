document.querySelector('#check').addEventListener('click', check)
document.querySelector('#placeToSee').innerText

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  // Is it a class day weekday or boring day
if(day === "Thursday" || day === "Tuesday" ){
  alert("Today is a ClassDay");
}else if (day === "Sunday") {
  alert("Today you have Office Hours")
} else {
  // alert("Not Today Fool")
  
  document.querySelector("#placeToSee").innerHTML = #day().value;
}

}




// Case sensitivity on inputs
// Sunday is Office Hours
// Tuesday & Thursday are class days

// Build the display section of the page