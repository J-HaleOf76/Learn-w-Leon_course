//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
function ifAgeIs(age) {
  if (age < 16) {
    console.log("You aint drivin");
    
  }else if (age < 18) {
    console.log("Stay outside the club");
  }else if(age < 21){
    console.log("You can't drink with us");
  }else if (age < 25){
    console.log("No cheap insurance for you");
  }else if (age < 30){
    console.log("No fancy cheap cars for you");
  }else if (age > 30){
    console.log("Good luck");
  }else{
    console.log("wtf bro");
  }
}
ifAgeIs(27);

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
