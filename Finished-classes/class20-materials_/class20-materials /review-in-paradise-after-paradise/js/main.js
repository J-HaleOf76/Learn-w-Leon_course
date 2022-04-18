// Create a function that takes in an array. If the first number, is less than the last number, 
// alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

// let hiArray = [10,20,30,40,50]
function firstLastBye(arr) {
    if( arr[0] < arr[ arr.length - 1 ]){
    alert("Hi")
  } else if ( arr[0] > arr[ arr.length - 1 ]) {
      alert("Bye")
    } else{
      alert("We close in an hour")
    }
  
}
firstLastBye[3,55,4,8,11,9,66];


// THE CODE GOBBLIN
let bestColors = ['green','blue','red','Blackberry','silver','black']
bestColors.forEach((e,i)=> console.log(e,i));
// forEach takes in upto 3 peramiters - It will return the element,the index and the array itself
